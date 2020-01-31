import React from "react";
import styled, {css} from "styled-components";
import paypal from "../../paypal.svg";
import {A} from "../../styled/elements/";

export default function Footer() {
  return (
    <FinalCredits>
      <Payments>
        <i style={{color: "#003087", fontSize: "1.4rem"}} className="fas fa-lock"></i>{" "}
        <img src={paypal} alt="" />
      </Payments>

      <Brand>Store</Brand>
      <Info>
        <Container>
          <Ul left>
            <Li to="/">My Cart</Li>
            <Li to="/">About Us</Li>
            <Li to="/">FAQ</Li>
          </Ul>
        </Container>
        <Container>
          <Ul right>
            <Li to="/">Privacy</Li>
            <Li to="/">Terms Of Use</Li>
            <Li to="/">Refund</Li>
          </Ul>
        </Container>
      </Info>

      <Apply to="/">Work With Us</Apply>

      <Address>NYC - Street 777 / Apt: 42 Really Awesome Name CNPJ: XXXXXXXXX</Address>
    </FinalCredits>
  );
}
const Payments = styled.div`
  padding: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  img {
    margin: 0 8px;
    height: 4vh;
  }
`;
const FinalCredits = styled.footer`
  font-size: 0.9rem;
  position: relative;
  margin: 0;
  width: 100vw;
  overflow: hidden;
  background-color: #335;
  color: #fff;
`;

const Brand = styled.div`
  text-align: center;
  color: #fff;
  overflow: hidden;
  width: fit-content;
  font-size: 1.3rem;
  margin: 30px auto 0;
  position: relative;
`;

const Info = styled.div`
  margin: 0;
  position: relative;
  display: flex;
  padding: 1px;
  height: 100px;
  flex-direction: row;

  @media (min-width: 768px) {
    width: 80vw;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  flex: 1;
  position: relative;
  padding: 1px;

  margin-top: 10px;
  text-align: center;

  @media (min-width: 768px) {
    flex: unset;
  }
`;

const Ul = styled.ul`
  padding: 0;
  position: absolute;
  list-style: none;

  ${(props) =>
    props.left &&
    css`
      right: 20%;
    `}
  ${(props) =>
    props.right &&
    css`
      left: 20%;
    `}

    @media(min-width: 768px) {
    all: unset;
    display: flex;
    flex-direction: row;
  }
`;

const Li = styled(A)`
  margin: 5px 0;
  width: fit-content;

  @media (min-width: 768px) {
    margin: 5px 20px;
  }
`;

const Apply = styled(A)`
  width: fit-content;
  margin: 30px auto;
  text-align: center;
  @media (min-width: 768px) {
    margin: 20px auto 30px;
  }
`;

const Address = styled.address`
  position: relative;
  bottom: 0;
  display: block;
  background-color: #334;
  padding: 40px;
  margin: 0;

  @media (min-width: 768px) {
    text-align: center;
  }
`;
