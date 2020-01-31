import React from "react";
import Notification from "../styled/blocks/Notification";
import {A, TEXT} from "../styled/ELEMENTS";

export const AddedToCart = ({product}) => {
  return (
    <A to="/cart">
      <Notification>
        <Notification.Message>Added to cart</Notification.Message>
        <Notification.Product>
          <Notification.Image src={`${process.env.PUBLIC_URL}/${product.img}`} alt="" />
          <Notification.Name>{product.name}</Notification.Name>
        </Notification.Product>
      </Notification>
    </A>
  );
};

export const TextOrIcon = ({inCart}) =>
  inCart ? (
    <TEXT>in cart</TEXT>
  ) : (
    <i style={{fontSize: "1rem", color: "#338"}} className="fas fa-cart-arrow-down"></i>
  );
