import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import styled, {css} from "styled-components";
import {FilterCreators} from "../../store/ducks";
import {A} from "../../styled/ELEMENTS/";

export const SideMenu = React.memo(function SideMenu({open, items}) {
  const dispatch = useDispatch();

  const [{products}] = useSelector((state) => [state.ProductReducer]);

  let brands = products.map((v) => v.company.toLowerCase());

  const uniqueBrands = brands.filter((v, i, s) => s.indexOf(v) === i);

  let history = useHistory();

  const gotoFilter = (u) => {
    dispatch(FilterCreators.filter(u));
    history.push("/");
  };

  const gotoProduct = (id) => {
    history.push("/details/" + id);
  };

  return (
    <Menu open={open}>
      <h1>Smartphones</h1>

      {uniqueBrands.map((u, ui) => (
        <Section key={ui}>
          <h2 onClick={() => gotoFilter(u)}>{u}</h2>
          <ul>
            {products.map((p) =>
              p.company.toLowerCase() === u ? (
                <li key={p.id} onClick={() => gotoProduct(p.id)}>
                  {p.name}
                </li>
              ) : (
                <div></div>
              )
            )}
          </ul>
        </Section>
      ))}
    </Menu>
  );
});

const Menu = styled.div`
  position: fixed;
  left: -180px;
  opacity: 1;
  top: 0;
  background-image: linear-gradient(120deg, #333388fa, #333355fa);
  transition: all 0.5s ease-out;
  display: block;
  height: 100vh;
  font-size: 1.2rem;
  overflow: hidden;
  width: 180px;
  z-index: 3;
  ${(props) =>
    props.open &&
    css`
      left: 0;
    `}
  @media (min-width: 768px) {
    position: absolute;
    background-color: #eee;
    left: 0;
    top: 215px;
  }
`;

const Section = styled.div`
  flex-direction: column;
  margin: 0;
  display: flex;
  list-style: none;
  padding-top: 20px;
`;

const Item = styled(A)`
  padding: 10px 30px;
  flex: 1;
  color: #fff;
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
  z-index: 2;
  transition: all 0.5s ease-out;
  border-radius: 50%;

  &:active,
  &:focus {
    background-color: #337;
  }
  ${(props) =>
    props.open &&
    css`
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
