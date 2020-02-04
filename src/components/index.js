import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {NotificationCreators} from "../store/ducks";
import * as N from "../styled/blocks/Notification";
import {TEXT} from "../styled/ELEMENTS";

export const AddedToCart = ({product}) => {
  const dispatch = useDispatch();

  let history = useHistory();
  useEffect(() => {
    setTimeout(() => dispatch(NotificationCreators.closeNotification(product)), 3000);
  });

  const goCart = () => history.push("/cart");

  return (
    <N.default onClick={goCart}>
      <N.__MESSAGE>Added to cart</N.__MESSAGE>
      <N.__PRODUCT>
        <N.__IMAGE src={`${process.env.PUBLIC_URL}/${product.img}`} alt="" />
        <N.__NAME>{product.name}</N.__NAME>
        <Confirmed className="fas fa-check-circle fa-2x"></Confirmed>
      </N.__PRODUCT>
    </N.default>
  );
};

const Confirmed = styled.i`
  margin-left: 10px;
  border-radius: 50%;
  color: #00cc7f;
  @media (min-width: 768px) {
    flex: 0.8;
  }
`;

export const TextOrIcon = ({inCart, color, details, price}) => {
  if (details && !inCart) {
    return (
      <>
        <i style={{color: color}} className="fas fa-cart-arrow-down fa-lg"></i>{" "}
        <TEXT strong style={{color: "#fff", fontSize: "1.4rem", marginLeft: "9px"}}>
          {price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
        </TEXT>
      </>
    );
  }
  if (details && inCart) {
    return (
      <>
        <Confirmed style={{color: "#fff"}} className="fas fa-check-circle fa-2x" />
        <TEXT strong style={{color: "#fff", fontSize: "1.4rem", marginLeft: "9px"}}>
          Added
        </TEXT>
      </>
    );
  }
  return inCart ? (
    <Confirmed className="fas fa-check-circle fa-2x" />
  ) : (
    <i style={{color: color}} className="fas fa-cart-arrow-down fa-lg"></i>
  );
};
