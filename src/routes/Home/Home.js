import React from "react";
import styled from "styled-components";
import ProductsList from "../../components/Products/Products";

export default function Home() {
  return (
    <React.Fragment>
      <Title>Buy'n All</Title>

      <ProductsList />
    </React.Fragment>
  );
}

const Title = styled.h1`
  margin: 200px 0;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  position: relative;

  &::after {
    position: absolute;
  }
`;
