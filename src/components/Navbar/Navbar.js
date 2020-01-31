import React, {useState} from "react";
import {useSelector} from "react-redux";
import styled, {css, keyframes} from "styled-components";
import {A} from "../../styled/elements/";
import {HamburguerMenu, SideMenu} from "../Menu/Menu";

export default function Navbar() {
  const {items} = useSelector((state) => state.CartReducer);

  //burger menu
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const showCart = () => {
    setDrop(true);
  };
  const closeCart = (evt) => {
    setDrop(false);
  };

  return (
    <Nav>
      <SideMenu open={open} />
      <Section>
        <HamburguerMenu open={open} setOpen={setOpen} />

        <Brand to="/">Store</Brand>

        <Icon cart to="/cart" className="fas fa-shopping-cart" onPointerEnter={showCart} />
        {drop && (
          <>
            <Shadow onClick={closeCart}></Shadow>
            <SUMMARY>
              <Arrow />
              <MyCart>My Shopping Cart</MyCart>
              <Scroll>
                {items.map((v, i) => (
                  <ITEM key={i}>
                    <Head>
                      <Image src={v.img} alt={v.name} />
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
              <CTA>
                <Wait onClick={closeCart}>Wait</Wait>
                <Continue to="/cart">Continue</Continue>
              </CTA>
            </SUMMARY>
          </>
        )}
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
const Shadow = styled.div`
  all: unset;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: 1;
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
  z-index: 1;
  transition: all 0.5s linear;
  background-color: #fff;

  @media (min-width: 768px) {
    right: 4.8%;
    top: 70px;
  }
`;
const Arrow = styled.div`
  position: absolute;
  right: 4.5px;
  transition: all 0.5s linear;
  top: -9px;
  background-color: #fff;
  width: 20px;
  height: 20px;
  rotate: 45deg;
  transition: all 0.5s linear;
`;

const MyCart = styled.div`
  color: #000;
  padding: 10px 0;
  transition: all 0.5s linear;
  text-align: center;
  border-bottom: 3px solid #555;
  transition: all 0.5s linear;
`;

const Scroll = styled.div`
  height: calc(100% - 80px);
  transition: all 0.5s linear;
  overflow-y: scroll;
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
  border-bottom: 1px solid #eee;
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
  background-color: #eee;
  position: absolute;
  left: 0;
  padding: 10px auto;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  bottom: 0;
`;

const Continue = styled(A)`
  flex: 1;
  background-color: rgb(0, 150, 0);

  &:hover {
    color: #fff;
  }
`;

const Wait = styled.div`
  flex: 1;
  background-color: #338;
  cursor: pointer;
`;

// ? NAVBAR

const Nav = styled.nav`
  color: #fff;
  background-color: #335;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  text-transform: capitalize !important;

  @media (min-width: 768px) {
    font-size: 2rem;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 2px;
    position: relative;
    width: 80vw;
    margin: 0 10vw;
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
        right: 25%;
        color: #f80;
        background-color: transparent;
        text-shadow: 0 0 20px #eee;
        font-size: 4.5rem;
      `}
      
      ${(props) =>
        props.search &&
        css`
          color: #000;
          position: relative;
          margin-left: 5px;
        `}


@media(min-width: 500px){
  ${(props) =>
    props.arrow &&
    css`
      right: 20%;
    `}
}

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
