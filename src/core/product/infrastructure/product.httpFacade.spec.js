import {ProductHttpFacade} from "./product.httpFacade";
import {Product} from "../domain/product";
import {setupServer} from 'msw/node';
import {rest} from "msw";
import {productFixture, productWithoutBrandFixture} from "../../../fixtures/product.fixture";

const facade = new ProductHttpFacade();
const apiUrl = `${process.env.REACT_APP_API_URL}/product`;

const server = setupServer(
  rest.get(apiUrl, (req, res, ctx) => {
    return res(ctx.json([
      productFixture,
      productWithoutBrandFixture
    ]));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Product HTTP Facade', () => {
  describe('getList', () => {
    it('should request and return a list of products successfully', async () => {
      const products = await facade.getList();
      expect(products).toBeInstanceOf(Array);
      products.forEach((product) => {
        expect(product).toBeInstanceOf(Product);
      });
    });

    it('should request and fail', async () => {
      server.use(
        rest.get(apiUrl, (req, res, ctx) => {
          return res(ctx.status(500))
        }),
      );
      await expect(() => facade.getList()).toThrow();
    });
  });
});
