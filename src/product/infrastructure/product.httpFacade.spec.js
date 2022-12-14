import {ProductHttpFacade} from "./product.httpFacade";
import {setupServer} from 'msw/node';
import {rest} from "msw";
import productFixture from "../../mocks/products.json";

const facade = new ProductHttpFacade();
const apiUrl = `${process.env.REACT_APP_API_URL}/product`;

const server = setupServer(
  rest.get(apiUrl, (req, res, ctx) => {
    return res(ctx.json(productFixture));
  }),
);

beforeAll(() => server.listen({onUnhandledRequest: 'bypass'}));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Product HTTP Facade', () => {
  describe('getList', () => {
    it('should return a list of products successfully', async () => {
      const products = await facade.getList();
      expect(products).toBeInstanceOf(Array);
      expect(products).toMatchSnapshot();
      expect(products).toHaveLength(8);
    });

    it('should request and fail', async () => {
      server.use(
        rest.get(apiUrl, (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({
              errorMessage: `Unexpected error occurred`,
            }),
          )
        }),
      );
      await expect(() => facade.getList()).rejects.toThrow();
    });
  });
});
