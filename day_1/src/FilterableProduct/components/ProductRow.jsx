import React from "react";
import "../style/ProductPage.css";

const inStockCheck = (flag, name) => {
  if (flag === true) {
    return <td style={{ color: "red" }}>{name}</td>;
  } else {
    return <td>{name}</td>;
  }
};

const ProductRow = (props) => {
  const { name, price, instock } = props;

  return (
    <tbody>
      <tr>
        {inStockCheck(instock, name)}
        <td>${price}</td>
      </tr>
    </tbody>
  );
};

export default ProductRow;
