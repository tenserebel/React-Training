import React from "react";
import ProductRow from "./ProductRow";
import ProductTitle from "./ProductTitle";
import "../style/ProductPage.css";

const ProductTable = ({ SportArray, ElectArray }) => {
  return (
    <div className="content">
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        <ProductTitle titleName="Sporting Goods" />
        {SportArray.map((product) => {
          return (
            <ProductRow
              name={product.name}
              price={product.price}
              instock={product.instock}
            />
          );
        })}
        <ProductTitle titleName="Electronics" />
        {ElectArray.map((product) => {
          return (
            <ProductRow
              name={product.name}
              price={product.price}
              instock={product.instock}
            />
          );
        })}
      </table>
    </div>
  );
};

export default ProductTable;
