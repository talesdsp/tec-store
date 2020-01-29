import React from "react";
import styled, {css} from "styled-components";
import {A} from "../../styled/elements/A";

export default function Footer() {
  return (
    <FinalCredits>
      <Brand>
        <img src="" alt="brand" />
      </Brand>
      <Info>
        <Container>
          <Ul left>
            <Li>My Cart</Li>
            <Li>About Us</Li>
            <Li>FAQ</Li>
          </Ul>
        </Container>
        <Container>
          <Ul right>
            <Li>Privacy</Li>
            <Li>Terms Of Use</Li>
            <Li>Refund</Li>
          </Ul>
        </Container>
      </Info>

      <Apply>Work With Us</Apply>

      <Address>NYC - Street 777 / Apt: 525 Really Awesome Name CNPJ: XXXXXXXXX</Address>
    </FinalCredits>
  );
}

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
  padding: 30px 0 0 10px;

  img {
    margin: 0 auto;
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
    display: block;
  }
`;

const Container = styled.div`
  flex: 1;
  position: relative;
  padding: 1px;

  margin-top: 20px;
  text-align: center;
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
`;

const Apply = styled(A)`
  margin: 40px auto;
  text-align: center;
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
