import {rest} from "msw";
import products from "./products.json";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/product`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(products)
    )
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/product/:id`, (req, res, ctx) => {
    const { id } = req.params;
    const product = products.find(product => product.id === id);
    return (product) ?
      res(
        ctx.status(200),
        ctx.json(product)
      ) :
      res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'Product not exist'
        })
      )
  }),
  rest.post(`${process.env.REACT_APP_API_URL}/cart`, (req, res, ctx) =>{
    const cachedValue = localStorage.getItem('cart');
    const cartCounter = JSON.parse(cachedValue);
    return res(
      ctx.status(200),
      ctx.json({
        count: (cartCounter && cartCounter.data) ? cartCounter.data + 1 : 1
      })
    )
  })
]
