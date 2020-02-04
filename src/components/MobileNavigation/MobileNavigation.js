import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import styled, {css, keyframes} from "styled-components";
import {TextOrIcon} from "..";
import {CartCreators, NotificationCreators, ProductCreators} from "../../store/ducks";
import {ADD_BUTTON} from "../../styled/ELEMENTS";

// import { Container } from './styles';

export default function MobileNavigation({inCart, thisProduct}) {
  const [{status}] = useSelector((state) => [state.NotificationReducer]);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(CartCreators.addToCart(thisProduct));
    dispatch(ProductCreators.insideCart(thisProduct));
    dispatch(NotificationCreators.openNotification(thisProduct));

    setTimeout(() => status && dispatch(NotificationCreators.closeNotification(thisProduct)), 3000);
  };

  let history = useHistory();
  const goBack = (evt) => history.push("/");

  return (
    <>
      {/* //! details page */}
      {thisProduct && (
        <CTA MOBILE>
          <Back onClick={goBack}>
            <i className="fas fa-angle-left fa-2x"></i>
          </Back>
          <Add disabled={inCart ? true : false} onClick={handleClick}>
            <Caller></Caller>
            <TextOrIcon details price={thisProduct.price} inCart={inCart} color="#fff" />
          </Add>
        </CTA>
      )}

      {}
    </>
  );
}

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
  z-index: 2;
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

const anim = keyframes`
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

const animation = (props) => css`
  ${anim}
`;

const Caller = styled.div`
  background-color: #77778890;
  width: 100px;
  position: absolute;
  margin: auto;
  border-radius: 50%;
  height: 100px;
  opacity: 0;
  overflow: hidden;
  animation: ${animation} 4s 2s linear;
`;
