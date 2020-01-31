import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled, {keyframes} from "styled-components";

export const A = styled(Link)`
  display: block;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: #fff;
  transition: all 0.5s ease-out;

  &:hover {
    color: orange;
  }

  &:active {
    color: orange;
  }
`;

export const Text = styled.p`
  text-align: center;
  text-transform: capitalize;
  font-size: 1rem;
  margin: 0;
`;

// TODO: fix
// ! Not working properly
// ? This is aplicated on the products list/cards
//   Should appear where mouse clicks, but the algorithm is wrong, resulting in random places across the element

const Clickable = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const Ripplefy = ({children}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = (evt) => {
    let btn = evt.target;

    let virtualX = evt.pageX - btn.offsetLeft;
    if (virtualX > 0) {
      while (virtualX > btn.clientWidth) {
        virtualX -= btn.clientWidth;
      }
    } else if (virtualX < 0) {
      while (virtualX < 0) {
        virtualX = 0;
      }
    }
    setX(virtualX);

    let virtualY = evt.pageY - btn.offsetTop;
    if (virtualY > 0) {
      while (virtualY > btn.clientHeight) {
        virtualY -= btn.clientHeight;
      }
    } else if (virtualY < 0) {
      while (virtualY < 0) {
        virtualY += btn.clientHeight;
        console.log(virtualY);
      }
    }
    setY(virtualY);

    setOpen(true);
    setTimeout(() => setOpen(false), 1000);
  };
  return (
    <Clickable onClick={handleClick}>
      {open && <Ripple style={{left: `${x}px`, top: `${y}px`}}></Ripple>}
      {children}
    </Clickable>
  );
};

const animateRipple = keyframes`
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(10);
  }
`;

const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  background-color: #335;
  margin-top: -10px;
  margin-left: -10px;
  width: 100px;
  height: 100px;
  animation: ${animateRipple} 1s;
  opacity: 0;
  z-index: 1;
`;
