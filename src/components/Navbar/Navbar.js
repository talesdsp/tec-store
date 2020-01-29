import React from "react";
import styled from "styled-components";
import {A} from "../../styled/elements/A";

export default function Navbar() {
  return (
    <Nav>
      <Section>
        <A to="/">
          <img alt="store" />
        </A>

        <Icon to="/cart" className="cart fa fa-shopping-cart" />
      </Section>
      <Section>
        <Search type="text" placeholder="What are you looking for ?" />

        <Icon to="" className="search fa fa-search" />
      </Section>
    </Nav>
  );
}

const Nav = styled.nav`
  padding: 20px;
  color: #fff;
  background-color: #335;
  position: fixed;
  top: 0;
  width: 100vw;
  overflow: hidden;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  text-transform: capitalize !important;

  @media (min-width: 500px) {
    position: relative;
    width: 100vw;
  }
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 5px;
`;

const Icon = styled(A)`
  display: block;
  position: absolute;
  right: 10%;
  margin: 0;
  padding: 0;

  .cart {
    top: 0;
  }

  .search {
    bottom: 0;
  }
`;

const Search = styled.input`
  /* width: 50%; */
  border: 1px solid #eee;
  line-height: 1.2rem;
  padding: 5px 21px;

  border-radius: 2px;
`;
