import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import styled, {css, keyframes} from "styled-components";
import {
  CartCreators,
  FilterCreators,
  NotificationCreators,
  ProductCreators
} from "../../store/ducks";
import {ADD_BUTTON} from "../../styled/ELEMENTS";
import {TextOrIcon} from "../index";

export default function MobileNavigation({inCart, thisProduct, HOME, CART}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(CartCreators.addToCart(thisProduct));
    dispatch(ProductCreators.insideCart(thisProduct));
    dispatch(NotificationCreators.openNotification(thisProduct));
  };

  const history = useHistory();

  const goBack = () => history.push("/");

  const gotoHome = () => {
    dispatch(FilterCreators.filter("all"));
    history.push("/");
  };

  const gotoCart = () => {
    history.push("/cart");
  };

  return (
    <>
      {thisProduct ? (
        <CTA MOBILE>
          <Back onClick={goBack}>
            <i className="fas fa-angle-left fa-2x"></i>
          </Back>
          <Add disabled={inCart ? true : false} onClick={handleClick}>
            <Bubble></Bubble>
            <TextOrIcon details={true} price={thisProduct.price} inCart={inCart} color="#fff" />
          </Add>
        </CTA>
      ) : HOME ? (
        <CTA HOME>
          <Back onClick={gotoHome}>
            <Circle className="fas fa-circle-notch"></Circle>
          </Back>
          <Add onClick={gotoCart} style={{cursor: "pointer"}}>
            <Bubble></Bubble>
            <Icon arrow to="" className="fas fa-angle-double-right fa-3x" />
            <P>Cart</P>
          </Add>
        </CTA>
      ) : (
        CART && (
          <CTA MOBILE>
            <Back onClick={goBack}>
              <Circle className="fas fa-circle-notch"></Circle>
            </Back>
          </CTA>
        )
      )}
    </>
  );
}

const Circle = styled.i`
  margin-top: 5px;
  font-size: 2rem;
  background-color: transparent;
`;

const P = styled.p`
  color: #fff;
  font-size: 1.5rem;

  margin-right: 25px;
  text-transform: uppercase;
`;

const Icon = styled.i`
  margin: 0;
  padding: 0;
  position: absolute;
  transition: all 0.5s ease;
  ${(props) =>
    props.arrow &&
    css`
      right: 10%;
      color: #fff;

      font-size: 3.5rem;
    `}
`;

const CTA = styled.div`
  position: fixed;
  width: 100vw;
  height: 10.1vh;
  margin: 0;
  padding: 0;
  left: 0;
  bottom: 0;
  display: flex;
  background-image: linear-gradient(90deg, #335, #338);
  flex-direction: row;
  z-index: 101;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

// ? The code below inherits the style then appends the css in JS
const Back = styled(ADD_BUTTON)((props) => ({
  // backgroundColor: "#335",
  position: "relative",
  height: "100%",
  backgroundColor: "transparent",
  flex: "1",
  padding: 0,
  color: "#fff",
  borderColor: "transparent",
  borderRadius: "0",
  cursor: "pointer"
}));

const Add = styled(ADD_BUTTON)((props) => ({
  backgroundColor: "transparent",
  padding: 0,
  height: "100%",
  borderColor: "transparent",
  position: "relative",
  borderRadius: " 0",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flex: "1",
  overflow: "hidden"
}));

const sink = keyframes`
0%{
  opacity: 1;
  transform: scale(0);
}
10%{
  transform : scale(2);
  opacity: 0;
}
11%{
  opacity: 0;
  transform : scale(0);
}

12%{
  opacity: 1;
  transform: scale(0);
}

22%{  
  opacity: 0;
  transform : scale(2);
}
100%{
}

`;

const ripple = (props) => css`
  ${sink}
`;

const Bubble = styled.div`
  background-color: #77778890;
  width: 100px;
  position: absolute;
  margin: auto;
  border-radius: 50%;
  height: 100px;
  opacity: 0;
  overflow: hidden;
  animation: ${ripple} 4s 2s linear;
`;
