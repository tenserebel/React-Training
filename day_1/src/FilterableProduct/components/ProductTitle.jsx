import React from "react";
import "../style/ProductPage.css";

const ProductTitle = (props) => {
  const { titleName } = props;
  return (
    <tr>
      <th id="par" class="span" colspan="5" scope="colgroup">
        {titleName}
      </th>
    </tr>
  );
};

export default ProductTitle;
