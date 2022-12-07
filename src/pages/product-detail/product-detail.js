import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ProductService} from "../../core/product/product.service";

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const productService = new ProductService();
  const navigate = useNavigate();

  useEffect(() => {
    productService.getProductDetail(productId).then(
      product => {
        console.log("product: ", product);
      }
    ).catch(e => {
      navigate('/products');
    });
  }, []);

  return (
    <>
      <h1>Detail</h1>
      <p>{productId}</p>
    </>
  )
}
