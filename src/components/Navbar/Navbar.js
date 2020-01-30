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
  font-size: 1.5rem;
  text-transform: capitalize !important;

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
        font-size: 5rem;
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
        right: 15%;
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
