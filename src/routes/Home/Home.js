import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import ProductsList from "../../components/Products/Products";

export default function Home() {
  const {products} = useSelector((state) => state.ProductReducer);

  let brands = products.map((v) => v.company.toLowerCase());

  const uniqueBrands = brands.filter((v, i, s) => s.indexOf(v) === i);

  return (
    <React.Fragment>
      <Title></Title>
      <Filter>
        Filter by Brand:
        <Select>
          {uniqueBrands.map((v, i) => (
            <option style={{textTransform: "capitalize"}} key={i} value={v}>
              {v}
            </option>
          ))}
        </Select>
      </Filter>
      <Window>
        <Container>
          <ProductsList />
        </Container>
      </Window>
    </React.Fragment>
  );
}

const Window = styled.div`
  @media (min-width: 768px) {
    width: 100vw;
    overflow: hidden;
  }
`;

const Container = styled.div`
  @media (min-width: 768px) {
    padding: 0 5vw;
  }
`;

const Filter = styled.div`
  display: block;
  width: fit-content;
  position: relative;
  margin: auto;
`;
const Select = styled.select`
  margin-left: 10px;
  width: fit-content;
  text-transform: capitalize;
`;

const Title = styled.h1`
  margin: 150px auto 20px;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  position: relative;
  width: fit-content;

  &::after {
    position: absolute;
  }
  @media (min-width: 500px) {
    margin: 20px auto;
  }
`;
