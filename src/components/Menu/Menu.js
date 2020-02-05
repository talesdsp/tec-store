import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import styled, {css} from "styled-components";
import {FilterCreators, MenuCreators} from "../../store/ducks/index";

export function SideMenu({MOBILE, PC}) {
  const dispatch = useDispatch();

  const [{products}, open] = useSelector((state) => [state.ProductReducer, state.MenuReducer]);

  let brands = products.map((v) => v.company.toLowerCase());

  const uniqueBrands = brands.filter((v, i, s) => s.indexOf(v) === i);

  let history = useHistory();

  const gotoFilter = (u) => {
    dispatch(MenuCreators.close());
    dispatch(FilterCreators.filter(u));
    history.push("/");
  };

  const gotoProduct = (id) => {
    dispatch(MenuCreators.close());
    history.push("/details/" + id);
  };

  const gotoHome = () => {
    dispatch(MenuCreators.close());
    dispatch(FilterCreators.filter("all"));
    history.push("/");
  };

  return (
    <Menu MOBILE={MOBILE} PC={PC} open={open}>
      <Category onClick={gotoHome}>Smartphones</Category>

      {/* take 1st brand. return all products made by them. go to next. repeat.  */}

      {uniqueBrands.map((u, ui) => (
        <Section key={ui}>
          <Brand onClick={() => gotoFilter(u)}>{u}</Brand>
          <Ul>
            {products.map(
              (p) =>
                p.company.toLowerCase() === u && (
                  <Li MOBILE={MOBILE} PC={PC} key={p.id} onClick={() => gotoProduct(p.id)}>
                    {p.name}
                  </Li>
                )
            )}
          </Ul>
        </Section>
      ))}
    </Menu>
  );
}

const Menu = styled.div`
  ${(props) =>
    props.MOBILE &&
    css`
      position: fixed;
      left: -190px;
      opacity: 1;
      top: 0;
      padding-top: 20px;
      background-image: linear-gradient(#333388 0%, #333388 80%, #333355 100%);
      transition: all 0.5s ease-out;
      display: block;
      height: 100vh;
      font-size: 1.2rem;
      overflow: auto;
      margin-right: -100px;
      width: 190px;
      z-index: 9999;

      ${(props) =>
        props.open === true &&
        css`
          left: 0;
        `}

      @media(min-width: 768px) {
        display: none;
      }
    `}
  ${(props) =>
    props.PC &&
    css`
      display: none;

      @media (min-width: 768px) {
        width: 180px;
        display: block;
        position: absolute;
        background-image: unset;
        background-color: #eee;
        left: 0;
        border-radius: 5px;
        height: max-content;
        background-color: #eee;
        overflow: hidden;
      }
    `}
`;

const Category = styled.h1`
  font-size: 1.4rem;
  cursor: pointer;
  margin: 0;
  padding: 10px 10px 10px 20px;
  color: springgreen;

  &:hover {
    background-color: #335;
  }

  @media (min-width: 768px) {
    color: #3784d2;
    &:hover {
      background-color: #fff;
    }
  }
`;

const Section = styled.div`
  flex-direction: column;
  margin: 0;
  display: flex;
  list-style: none;
`;

const Brand = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 0 20px;

  padding: 10px 10px;

  cursor: pointer;
  text-transform: capitalize;
  color: springgreen;

  &:hover {
    background-color: #335;
  }
  @media (min-width: 768px) {
    color: #3784d2;
    &:hover {
      background-color: white;
    }
  }
`;

const Ul = styled.ul`
  list-style: none;

  margin: 0 0 5px 0;
`;

const Li = styled.li`
  text-transform: capitalize;
  font-size: 0.9rem;
  color: #fff;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #335;
  }
  @media (min-width: 768px) {
    color: #000;
    &:hover {
      background-color: #fff;
    }
  }
`;

export function HamburguerMenu({open}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    open === false ? dispatch(MenuCreators.open()) : dispatch(MenuCreators.close());
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
      left: 190px;
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
