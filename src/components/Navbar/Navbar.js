import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import styled, {css, keyframes} from "styled-components";
import {MenuCreators} from "../../store/ducks";
import {TEXT} from "../../styled/ELEMENTS";
import {AddedToCart} from "../index";
import {HamburguerMenu, SideMenu} from "../Menu/Menu";

export default function Navbar() {
  const [{items}, {status, product}, open] = useSelector((state) => [
    state.CartReducer,
    state.NotificationReducer,
    state.MenuReducer
  ]);
  let history = useHistory();
  const dispatch = useDispatch();

  //burger menu

  const [drop, setDrop] = useState(false);

  const showCart = () => setDrop(true);
  const closeCart = () => setDrop(false);

  const goBack = () => history.push("/") & closeCart();
  const goCart = () => history.push("/cart") & closeCart();

  const DisplayItems = () => {
    return items.length > 0 ? (
      <Scroll>
        {items.map((v, i) => (
          <ITEM key={i}>
            <Head>
              <Image src={`${process.env.PUBLIC_URL}/${v.img}`} alt={v.name} />
            </Head>
            <Info>
              <Name>{v.name}</Name>
              <Qty>quantity: {v.quantity}</Qty>
              <Price>
                {(v.price * v.quantity).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL"
                })}
              </Price>
            </Info>
          </ITEM>
        ))}
      </Scroll>
    ) : (
      <div style={{padding: "20px"}}>
        <TEXT style={{color: "#333", marginBottom: "20px"}}>Your cart is empty.</TEXT>
        <TEXT style={{color: "#333"}}>Start adding products.</TEXT>
      </div>
    );
  };

  const CartSummary = () => {
    return (
      drop && (
        <>
          <SHADOW onClick={closeCart}></SHADOW>
          <SUMMARY>
            <Arrow />
            <MyCart>My Shopping Cart</MyCart>
            <DisplayItems />
            <CTA>
              <Close onClick={closeCart}>Close</Close>

              {items.length > 0 ? (
                <Continue onClick={goCart}>Continue</Continue>
              ) : (
                <Continue onClick={goBack}>Add</Continue>
              )}
            </CTA>
          </SUMMARY>
        </>
      )
    );
  };

  return (
    <Nav>
      <SideMenu MOBILE />
      {status && <AddedToCart product={product} />}

      {open && <SHADOW onClick={() => dispatch(MenuCreators.close())} />}

      <Section>
        <HamburguerMenu open={open} />

        <Brand onClick={goBack}>Store</Brand>

        {items.length > 0 && <Counter>{items.length}</Counter>}
        <Icon
          cart
          to="/cart"
          className="fas fa-shopping-cart"
          onMouseEnter={showCart}
          onClick={showCart}
        />
        <CartSummary />
      </Section>
      <Section>
        <Block>
          <Search type="text" placeholder="What are you looking for ?" autoFocus />
          <Icon arrow to="" className="fas fa-angle-double-right fa-3x" />
          <Button>
            Search
            <Icon search to="" className="fas fa-search" />
          </Button>
        </Block>
      </Section>
    </Nav>
  );
}

const Counter = styled.div`
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  text-align: center;
  color: #000;
  padding: 0 0 0 0px;
  font-size: 0.8rem;
  background-color: springgreen;
  right: 4%;
  top: 2px;
  @media (min-width: 768px) {
    top: 50px;
  }
`;

const SHADOW = styled.div`
  all: unset;
  background-image: linear-gradient(120deg, #33338855, #33335555);
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  transition: all 0.5s linear;
`;

const SUMMARY = styled.div`
  font-size: 1.5rem;
  position: absolute;
  right: 3.8%;
  top: 50px;
  display: block;
  height: 300px;
  width: 300px;
  border-radius: 5px;
  z-index: 2;
  transition: all 0.5s linear;
  background-color: #fff;

  @media (min-width: 768px) {
    right: 4.8%;
    top: 100px;
  }
`;
const Arrow = styled.div`
  position: absolute;
  right: 4.5px;
  transition: all 0.5s linear;
  top: -7px;
  background-color: springgreen;
  width: 20px;
  height: 20px;

  transform: rotate(45deg);
  transition: all 0.5s linear;
`;

const MyCart = styled.div`
  color: #fff;
  background-image: linear-gradient(120deg, #338, #335);
  padding: 10px 0;
  transition: all 0.5s linear;
  text-align: center;

  transition: all 0.5s linear;
`;

const Scroll = styled.div`
  height: calc(100% - 90px);
  transition: all 0.5s linear;
  overflow-y: scroll;
  background-color: #eee;
  overflow-x: hidden;
`;

const puff = keyframes`
from {
  opacity: 0;
}to{
  opacity: 1;
}
`;

const ITEM = styled.div`
  display: flex;
  height: 80px;
  overflow: hidden;
  flex-direction: row;

  transition: all 0.5s linear;
  animation: ${puff} 1s ease-in-out;
`;

const Head = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  border-right: 1px solid #eee;
`;

const Image = styled.img`
  height: 100%;
  margin: 0;
  overflow: hidden;
`;

const Info = styled.div`
  padding: 10px 0 0 10px;
  flex: 2;
  color: #000;
`;

const Name = styled.div`
  margin-bottom: 5px;
  font-size: 0.8rem;
`;

const Qty = styled.div`
  width: fit-content;
  font-size: 0.7rem;
`;

const Price = styled.div`
  right: 0;
  font-size: 0.8rem;
`;

const CTA = styled.div`
  background-image: linear-gradient(120deg, #335, #338);
  position: absolute;
  left: 0;
  height: 40px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
  align-items: center;
  border: none;
  bottom: 0;
`;

const Close = styled.button`
  border: none;
  flex: 1;
  background-color: transparent;
  cursor: pointer;
  width: unset;
  height: unset;
  font-size: 1.6rem;
  color: #fff;
`;

const Continue = styled.button`
  color: springgreen;
  background-color: transparent;
  border: 1px solid #338;
  font-size: 1.6rem;
  width: unset;
  height: unset;
  flex: 1;
  cursor: pointer;
`;

//! ------------
// ? NAVBAR

const Nav = styled.nav`
  color: #fff;
  background-image: linear-gradient(135deg, #338, #335);
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  z-index: 101;
  text-transform: capitalize !important;

  @media (min-width: 768px) {
    font-size: 3rem;
    padding-top: 40px;
    padding-bottom: 50px;
    border-radius: 2px;
    position: relative;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin: 5px;
`;

const Brand = styled.h1`
  margin: 0;
  cursor: pointer;
  @media (min-width: 768px) {
    margin: initial;
  }
`;

const Block = styled.div`
  background-color: orange;
  position: relative;
  width: fit-content;
  padding: 2px 5px;
  cursor: pointer;
  border: 1px solid #338;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 5px;
  align-items: center;
  margin: 0;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  padding: none;
  margin: none;
  display: flex;
  width: max-content;
  align-items: center;
  color: #000;
  cursor: pointer;
  font-size: 1.2rem;
`;

const Icon = styled.i`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  position: absolute;
  transition: all .5s ease;
  
  ${(props) =>
    props.cart &&
    css`
      cursor: pointer;
      color: #fff;
      right: 5%;
    `}
    
  ${(props) =>
    props.arrow &&
    css`
      right: 28%;
      color: #f80;
      background-color: transparent;
      text-shadow: 0 0 10px #ddd;
      font-size: 4.5rem;

      @media (min-width: 400px) {
        right: 25%;
      }

      @media (min-width: 500px) {
        right: 20%;
      }
    `}
      
  ${(props) =>
    props.search &&
    css`
      color: #000;
      position: relative;
      margin-left: 5px;
    `}



@media (min-width: 768px) {
  font-size: 1.5rem;
  
  ${(props) =>
    props.arrow &&
    css`
      font-size: 6rem;
    `}
  }
  @media(min-width: 850px){
  ${(props) =>
    props.arrow &&
    css`
      right: 17%;
    `}
  }
  @media(min-width: 1000px){
    ${(props) =>
      props.arrow &&
      css`
        right: 14%;
      `}
    }

    @media(min-width: 1240px){

      ${(props) =>
        props.arrow &&
        css`
          right: 13%;
        `}
      }
      
  @media(min-width: 1400px){
    ${(props) =>
      props.arrow &&
      css`
        right: 12%;
      `}
    }
`;

const Search = styled.input`
  width: 50vw;
  border: 1px solid #eee;
  line-height: 1.2rem;
  padding: 5px 21px;
  border-radius: 2px;
  margin-right: 5px;
  @media (min-width: 500px) {
  }
`;
