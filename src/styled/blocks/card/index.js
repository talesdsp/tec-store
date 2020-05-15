import styled, { css } from "styled-components";

//  Declared just in case some child need to reference it
const CARD = styled.div`
  width: 90vw;
  height: 120px;
  text-align: left;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s linear;
  background: #fff;
  overflow: hidden;
  display: block;
  margin: 20px 5vw;
  align-items: center;
  padding: 0;
  border-radius: 5px;
  transition: all 1s linear;
  cursor: pointer;

  ${(props) =>
    props.CAROUSEL &&
    css`
      margin: 10px;
      left: 20px;
      height: 372px;
      min-width: 200px;
      overflow: hidden;
    `}
  ${(props) =>
    props.CART &&
    css`
      box-shadow: unset;
    `}


  @media (min-width: 768px) {
    margin: 10px;
    overflow: hidden;
    height: unset;
    max-height: 400px;
    min-width: 20vw;
    max-width: 200px;

    ${(props) =>
      props.CART &&
      css`
        margin: 0;
        max-width: calc(100vw - 360px);
        height: 120px;
      `}
  }
  @media (min-width: 1000px) {
    ${(props) =>
      props.CART &&
      css`
        max-width: calc(100vw - 460px);
      `}
  }
`;

export default CARD;

export const __CONTAINER = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  height: 100%;

  ${(props) =>
    props.CART &&
    css`
      pointer-events: none;
    `}

  ${(props) =>
    props.CAROUSEL &&
    css`
      flex-direction: column;
    `}

  @media (min-width: 768px) {
    flex-direction: column;

    ${(props) =>
      props.CART &&
      css`
        flex-direction: row;
      `}
  }
`;

export const __HEADER = styled.div`
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  flex: 1;
  height: 100%;

  ${(props) =>
    props.CAROUSEL &&
    css`
      flex: 3;
      &:hover {
        overflow: unset;
      }
    `}

  @media (min-width: 768px) {
    flex: 3;
    &:hover {
      overflow: unset;
    }

    ${(props) =>
      props.CART &&
      css`
        flex: 1;
      `}
  }
`;

export const __IMAGE = styled.img`
  height: 100%;
  transition: transform 0.5s ease-out;

  ${__HEADER}:hover & {
    transform: scale(1.3);
  }

  @media (min-width: 500px) {
    right: 0;
  }

  ${(props) =>
    props.CAROUSEL &&
    css`
      position: relative;
      right: unset;
      height: unset;
      width: 100%;
    `}

  @media (min-width: 768px) {
    position: relative;
    right: unset;
    height: unset;
    width: 100%;
  }
`;

export const __INFO = styled.div`
  position: relative;
  box-sizing: border-box;
  background: transparent;
  border: 3px solid transparent;
  transition: all 0.5s ease-in-out;
  padding: 15px;
  margin: 0;
  border-radius: 5px;
  flex: 2;

  &:hover {
    border-left: 3px solid #3784d2;
    flex: 20;
    width: 100%;
  }

  ${(props) =>
    props.CAROUSEL &&
    css`
      width: unset;
      flex: 1;
      &:hover {
        flex: 5;
      }
    `}

  @media (min-width: 768px) {
    width: unset;
    flex: 1;
    &:hover {
      flex: 5;
    }

    ${(props) =>
      props.CART &&
      css`
        height: 100px;
        display: block;
        display: flex;
        flex: 2;
        align-items: center;
      `}
  }

  @media (min-width: 1000px) {
    &:hover {
      flex: 4;
    }
  }

  @media (min-width: 1400px) {
    &:hover {
      flex: 3;
    }
  }
`;

export const __BRAND = styled.div`
  width: fit-content;
  color: #888;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 0;
`;

export const __NAME = styled.div`
  width: fit-content;
  color: #3784d2;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    ${(props) =>
      props.CART &&
      css`
        margin-left: 10px;
        margin-right: 10px;
      `}
  }
`;

export const __REVIEWS = styled.div`
  display: inline;
  font-size: 1rem;
  color: #777;
`;

export const __STAR = styled.div`
  color: #ff0;
  text-shadow: -1px -1px 1px #663, -1px 1px 1px #663, 1px -1px 1px #663, 1px 1px 1px #663;
  padding: 3px 1px;
  margin-bottom: 5px;
`;

export const __PRICE = styled.div`
  width: fit-content;
  font-size: 1.15rem;
  margin: 2px 0;
  color: var(--buy-color);
`;

export const __DESCRIPTION = styled.div`
  position: absolute;
  color: #888;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  transform: translate(100%, 0);
  display: block;
  padding: 5vw 0;
  top: 0;
  right: 5%;
  left: 57%;
  font-size: 0.9rem;

  ${__INFO}:hover & {
    transform: initial;
    opacity: 1;
  }

  @media (min-width: 450px) {
    left: 50%;
  }
  @media (min-width: 500px) {
    left: 40%;
  }

  ${(props) =>
    props.CAROUSEL &&
    css`
      padding: 8px 20px 20px 0;
      right: unset;
      left: unset !important;
      top: unset;
      transform: translate(0, 100%);

      ${__INFO}:hover & {
        transform: translate(0, 0);
        opacity: 1;
      }
    `}

  @media (min-width: 768px) {
    padding: 8px 20px 20px 0;
    right: unset;
    left: unset;
    top: unset;
    transform: translate(0, 100%);

    ${__INFO}:hover & {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  @media (min-width: 1000px) {
    padding: 8px 20px 0 0;
  }
`;
