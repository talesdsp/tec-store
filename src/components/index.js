import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {NotificationCreators} from "../store/ducks";
import Notification from "../styled/blocks/Notification";
import {TEXT} from "../styled/ELEMENTS";

export const AddedToCart = ({product}) => {
  const dispatch = useDispatch();

  let history = useHistory();
  useEffect(() => {
    setTimeout(() => dispatch(NotificationCreators.closeNotification(product)), 3000);
  });

  const goCart = () => history.push("/cart");

  return (
    <Notification onClick={goCart}>
      <Notification.Message>Added to cart</Notification.Message>
      <Notification.Product>
        <Notification.Image src={`${process.env.PUBLIC_URL}/${product.img}`} alt="" />
        <Notification.Name>{product.name}</Notification.Name>
      </Notification.Product>
    </Notification>
  );
};

export const TextOrIcon = ({inCart, color}) =>
  inCart ? (
    <TEXT style={{color: color}}>in cart</TEXT>
  ) : (
    <i style={{fontSize: "1rem", color: color}} className="fas fa-cart-arrow-down"></i>
  );
