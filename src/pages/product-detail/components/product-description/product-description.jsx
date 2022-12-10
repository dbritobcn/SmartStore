import React from "react";
import {Table} from "react-bootstrap";
import "./product-description.scss";

export const ProductDescription = (props) => {
  const {product} = props;

  return (
    <div className="product-description">
      <div className="product-description__title">
        <div>
          <h5 className="mb-0">{product.brand}</h5>
          <h1>{product.model}</h1>
        </div>
        <div>
          <h4 className="text-end mb-0">{product.price}€</h4>
          <p className="text-end mb-0"><small>TAX included</small></p>
        </div>
      </div>
      <div className="product-description__specifics mt-3">
        <Table responsive="xs">
          <tbody>
          <tr>
            <td>CPU</td>
            <td className="text-end">{product.cpu}</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td className="text-end">{product.ram}</td>
          </tr>
          <tr>
            <td>SO</td>
            <td className="text-end">{product.so}</td>
          </tr>
          <tr>
            <td>Screen resolution</td>
            <td className="text-end">{product.screenResolution}</td>
          </tr>
          <tr>
            <td>Battery</td>
            <td className="text-end">{product.battery}</td>
          </tr>
          <tr>
            <td>Camera</td>
            <td className="text-end">{product.camera}</td>
          </tr>
          <tr>
            <td>Size</td>
            <td className="text-end">{product.size}"</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td className="text-end">{product.weight}</td>
          </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}
