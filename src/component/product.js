import React from "react";

export default function Product(props) {
  return (
    <div className="col-lg-6 col-12">
      <div className="productCard">
        <div className="productHeader">
          <p style={{ fontSize: 20, fontWeight: "bold" }}>{props.data.name}</p>
          <p style={{ color: "orange", fontWeight: "bold" }}>
            Rp {props.data.price},00
          </p>
        </div>
        <div className="productDescription">
          <p>{props.data.description}</p>
          <p style={{ color: "blue" }}>
            {props.data.furniture_style.toString()}
          </p>
        </div>
        <div className="productFooter">
          <p></p>
          <p style={{ color: "blue", fontWeight: "bold" }}>
            {props.data.delivery_time} Hari
          </p>
        </div>
      </div>
    </div>
  );
}
