import React from "react";
import styled, {css} from "styled-components";
import {A} from "../../styled/elements/A";

export function SideMenu({open}) {
  return (
    <Menu open={open}>
      <Content>
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Cart</Item>
        <Item>Privacy</Item>
      </Content>
    </Menu>
  );
}

const Menu = styled.div`
  position: fixed;
  left: -100vw;
  top: 0;
  transition: all 0.5s ease-out;
  display: block;
  height: 100vh;
  width: 50vw;

  ${(props) =>
    props.open &&
    css`
      background-color: #335;
      left: 0%;
      overflow: hidden;
      z-index: 2;
    `}
  @media(min-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  flex-direction: column;
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
`;

const Item = styled(A)`
  padding: 10px;
  flex: 1;

  &:hover {
    background-color: #ffb86c;
  }
`;

export function HamburguerMenu({open, setOpen}) {
  const handleClick = (evt) => {
    setOpen(!open);
  };

  return (
    <Clickable onClick={handleClick}>
      <MENU_BTN__BURGER open={open}></MENU_BTN__BURGER>
    </Clickable>
  );
}

const Clickable = styled.div`
  height: 25px;
  padding: 5px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  z-index: 3;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MENU_BTN__BURGER = styled.div`
  margin: auto;
  display: block;
  background: #fff;
  position: relative;
  width: 2rem;
  height: 0.25rem;
  transition: all 0.3s linear;

  ${(props) =>
    props.open &&
    css`
      transform: translateX(-60px);
      background: transparent;
    `}

  &::before, &::after {
    content: " ";
    position: absolute;
    width: 2rem;
    background-color: #fff;
    height: 0.25rem;
    border-radius: 0.5em;
    transition: all 0.3s linear;
  }
  &::before {
    transform: translateY(-0.5rem);

    ${(props) =>
      props.open &&
      css`
        transform: translateX(60px) rotate(-45deg);
        opacity: 1;
      `}
  }
  &::after {
    transform: translateY(0.5rem);

    ${(props) =>
      props.open &&
      css`
        transform: translateX(60px) rotate(45deg);
        opacity: 1;
      `}
  }
`;
