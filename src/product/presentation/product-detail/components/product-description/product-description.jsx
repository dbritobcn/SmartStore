import React from "react";
import {Table} from "react-bootstrap";
import "./product-description.scss";

export const ProductDescription = ({product}) => (
  <div className="product-description">
    <div className="product-description__title">
      <div>
        <h5 className="mb-0" data-cy="brand">{product.brand}</h5>
        <h1 data-cy="model">{product.model}</h1>
      </div>
      <div>
        <h4 className="text-end mb-0" data-cy="price">{product.price}€</h4>
        <p className="text-end mb-0"><small>TAX included</small></p>
      </div>
    </div>
    <div className="product-description__specifics mt-3">
      <Table responsive="xs">
        <tbody>
        <tr>
          <td>CPU</td>
          <td className="text-end" data-cy="cpu">{product.cpu}</td>
        </tr>
        <tr>
          <td>RAM</td>
          <td className="text-end" data-cy="ram">{product.ram}</td>
        </tr>
        <tr>
          <td>SO</td>
          <td className="text-end" data-cy="so">{product.so}</td>
        </tr>
        <tr>
          <td>Screen resolution</td>
          <td className="text-end" data-cy="screenResolution">{product.screenResolution}</td>
        </tr>
        <tr>
          <td>Battery</td>
          <td className="text-end" data-cy="battery">{product.battery}</td>
        </tr>
        <tr>
          <td>Camera</td>
          <td className="text-end" data-cy="camera">{product.camera}</td>
        </tr>
        <tr>
          <td>Size</td>
          <td className="text-end" data-cy="size">{product.size}"</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td className="text-end" data-cy="weight">{product.weight}</td>
        </tr>
        </tbody>
      </Table>
    </div>
  </div>
)
