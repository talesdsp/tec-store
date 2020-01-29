import React, {useState} from "react";
import styled, {keyframes} from "styled-components";

const Btn = styled.button`
  position: relative;
  overflow: hidden;
  border: none;
  text-align: center;
  box-sizing: border-box;
  padding: 20px 40px;
  text-transform: capitalize;
  font-size: 1.4rem;
  background-color: var(--buy-color);
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #52ed41;
  }
  &:focus {
    outline: none;
  }
`;

export const Button = ({children}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [open, setOpen] = useState(false);
  function handleClick(evt) {
    let btn = evt.target;
    setX(evt.pageX - btn.offsetLeft);
    setY(evt.pageY - btn.offsetTop);
    setOpen(true);
    setTimeout(() => setOpen(false), 1000);
  }
  return (
    <Btn onClick={handleClick}>
      {open && <Ripple style={{left: x, top: y}}></Ripple>}
      {children}
    </Btn>
  );
};

export const CartButton = styled(Button)`
  color: var(--mainBlue);
  background-color: var(--mainYellow);
  border-color: var(--mainYellow);
`;

export const BuyButton = styled(Button)`
  background-color: #17e800;
`;

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
  background-color: rgba(255, 255, 255, 0.3);
  width: 100px;
  height: 100px;
  margin-top: -50px;
  margin-left: -50px;
  animation: ${animateRipple} 1s;
  opacity: 0;
`;
