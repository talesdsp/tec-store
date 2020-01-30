import React, {useState} from "react";
import styled, {css} from "styled-components";
import {A} from "../../styled/elements/A";
import {HamburguerMenu, SideMenu} from "../Menu/Menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <SideMenu open={open} />
      <Section>
        <HamburguerMenu open={open} setOpen={setOpen} />
        <A to="/">
          <img alt="store" />
        </A>

        <Icon cart to="/cart" className="fas fa-shopping-cart" />
      </Section>
      <Section>
        <Block>
          <Search type="text" placeholder="What are you looking for ?" />
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

const Block = styled.div`
  background-color: orange;
  position: relative;
  width: fit-content;
  padding: 2px 5px;
  cursor: pointer;
  border: 1px solid #338;
  display: flex;
  border-radius: 5px;
  align-items: center;
  margin: 0;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  padding: none;
  margin: none;
  width: max-content;
  padding-left: 20px;
`;

const Nav = styled.nav`
  color: #fff;
  background-color: #335;
  position: fixed;
  top: 0;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  text-transform: capitalize !important;

  @media (min-width: 500px) {
  }

  @media (min-width: 768px) {
    width: unset;
    padding: unset;
    position: relative;
    margin: 0 5vw;
    font-size: 2rem;
    background: transparent;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin: 5px;

  @media (min-width: 500px) {
    width: fit-content;
  }
`;

const Icon = styled.i`
  color: #fff;
  display: block;
  margin: 0;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
  position: absolute;

  ${(props) =>
    props.cart &&
    css`
      right: 5%;
    `}

  ${(props) =>
    props.arrow &&
    css`
      right: 10%;
      color: #f0f;
      font-size: 5rem;
    `}

    ${(props) =>
      props.search &&
      css`
        right: 0;
      `}

  @media (min-width: 500px) {
    position: relative;
    right: unset;
    font-size: 2rem;
    top: unset;
    bottom: unset;
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
    min-width: 50vw;
  }
`;
