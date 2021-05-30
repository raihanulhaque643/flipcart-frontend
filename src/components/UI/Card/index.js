import React from "react";
import { getProductPage } from "../../../actions";
import "./style.css";

const Card = (props) => {
  return (
    <div {...props} className="card">
      {(props.headerRight || props.headerLeft) && (
        <div className="cardHeader">
          {props.headerLeft && <div>{props.headerLeft}</div>}
          {props.headerRight && props.headerRight}
        </div>
      )}

      {props.children}
    </div>
  );
};

export default Card;
