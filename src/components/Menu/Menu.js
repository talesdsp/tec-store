import React, {useState} from "react";
import styled, {css} from "styled-components";

export function HamburguerMenu() {
  const [open, setOpen] = useState(false);
  const handleClick = (evt) => {
    setOpen((prev) => !prev);
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
      background: #335;
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
