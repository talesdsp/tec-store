import React from "react";
import styled, {css} from "styled-components";
import paypal from "../../paypal.svg";
import {A} from "../../styled/elements";

export default function Footer() {
  return (
    <>
      <Payments>
        <img src={paypal} alt="" />
      </Payments>
      <FinalCredits>
        <Flexed>
          <Box>
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
          </Box>
        </Flexed>
        <Flexed>
          <Apply to="/">Work With Us</Apply>

          <Address onres>NYC - Street 777 / Apt: 42 Really Awesome Name CNPJ: XXXXXXXXX</Address>
        </Flexed>
        <Filler></Filler>
      </FinalCredits>
    </>
  );
}

const Payments = styled.div`
  padding: 15px 0;
  background-color: #fff;
  display: flex;
  width: 100vw;
  justify-content: center;
  position: relative;
  z-index: -1;
  img {
    height: 4vh;
  }
`;

const FinalCredits = styled.footer`
  font-size: 0.9rem;
  position: relative;
  margin: 0;
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
  color: #fff;
  z-index: 0;
  background-image: linear-gradient(135deg, #338, #335);
  @media (min-width: 768px) {
    display: flex;
    font-size: 1.1rem;
    padding: 40px 40px 70px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Flexed = styled.div`
  all: unset;
  display: block;
  position: relative;
  box-sizing: border-box;
  @media (min-width: 768px) {
    max-width: 50vw;
    flex: 1;
  }
`;

const Box = styled.div`
  position: relative;
  display: block;
`;

const Brand = styled.div`
  text-align: center;
  color: #fff;
  overflow: hidden;
  width: fit-content;
  font-size: 1.3rem;
  margin: 30px auto 0;
  position: relative;
  @media (min-width: 768px) {
    font-size: 1.9rem;
    margin-bottom: 20px;
  }
`;

const Info = styled.div`
  margin: 0;
  position: relative;
  display: flex;
  padding: 1px;
  height: 100px;
  flex-direction: row;

  @media (min-width: 768px) {
    margin: 0 auto;
    height: 80px;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  flex: 1;
  position: relative;
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
    padding: 30px;
    flex-direction: column;
  }
`;

const Li = styled(A)`
  margin: 5px 0;
  width: fit-content;

  @media (min-width: 768px) {
  }
`;

const Apply = styled(A)`
  width: fit-content;
  margin: 20px auto;
  text-align: center;
  position: relative;
`;

const Address = styled.address`
  position: relative;
  bottom: 0;
  display: block;
  padding: 20px 40px 30px;
  margin: 0;
  @media (min-width: 500px) {
    text-align: center;
    padding-bottom: 40px;
  }
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Filler = styled.div`
  height: calc(9.7vh);
  background-color: #fff;

  @media (min-width: 768px) {
    display: none;
  }
`;
