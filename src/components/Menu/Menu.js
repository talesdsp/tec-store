import React from "react";
import styled, {css} from "styled-components";
import {A} from "../../styled/ELEMENTS/";

export function SideMenu({open, items}) {
  return (
    <Menu open={open}>
      <Content>
        <Item to="">Home</Item>
        <Item to="">About</Item>
        <Item to="">Cart</Item>
        <Item to="">Privacy</Item>
      </Content>
    </Menu>
  );
}

const Menu = styled.div`
  position: fixed;
  left: -180px;
  opacity: 1;
  top: 0;
  background-image: linear-gradient(135deg, #338, #335);
  transition: all 0.5s ease-out;
  display: block;
  height: 100vh;
  font-size: 1.2rem;
  overflow: hidden;
  width: 180px;
  z-index: 2;

  ${(props) =>
    props.open &&
    css`
      left: 0;
    `}
  @media(min-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  flex-direction: column;
  margin: 0;
  display: flex;
  list-style: none;
  padding-top: 20px;
`;

const Item = styled(A)`
  padding: 10px 30px;
  flex: 1;
  &:hover {
    color: #000;
    background-color: orange;
  }
`;

export function HamburguerMenu({open, setOpen}) {
  const handleClick = (evt) => {
    setOpen(!open);
  };

  return (
    <Clickable onClick={handleClick} open={open}>
      <MENU_BTN__BURGER open={open}></MENU_BTN__BURGER>
    </Clickable>
  );
}

const Clickable = styled.div`
  height: 40%;
  padding: 2px 10px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 5vw;
  cursor: pointer;
  margin-right: 10px;
  z-index: 1;
  transition: all 0.5s ease-out;
  border-radius: 50%;

  &:active,
  &:focus {
    background-color: #337;
  }
  ${(props) =>
    props.open &&
    css`
      background-color: #336;
      left: 180px;
    `}

  @media (min-width: 768px) {
    display: none;
  }
`;

const MENU_BTN__BURGER = styled.div`
  display: block;
  background: #fff;
  position: relative;
  width: 1.6rem;
  height: 0.2rem;
  border-radius: 0.5em;
  transition: all 0.3s linear;

  ${Clickable}:hover & {
    ${(props) =>
      props.open === false &&
      css`
        background-color: orange;
      `}
  }

  ${(props) =>
    props.open &&
    css`
      transform: translateX(-60px);
      background: transparent;
    `}

  &::before, &::after {
    content: " ";
    position: absolute;
    width: 1.6rem;
    background-color: #fff;
    height: 0.2rem;
    border-radius: 0.5em;
    transition: all 0.3s linear;
  }
  &::before {
    transform: translateY(-0.5rem);

    ${(props) =>
      props.open &&
      css`
        transform: translateX(60px) rotate(-45deg);
      `}
  }
  &::after {
    transform: translateY(0.5rem);

    ${(props) =>
      props.open &&
      css`
        transform: translateX(60px) rotate(45deg);
      `}
  }
`;
