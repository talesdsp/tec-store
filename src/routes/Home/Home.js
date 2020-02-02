import React from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import ProductsList from "../../components/Products/Products";
import {FilterCreators} from "../../store/ducks";

export default function HomePage() {
  const [{products}, {filter}] = useSelector((state) => [
    state.ProductReducer,
    state.FilterReducer
  ]);

  const dispatch = useDispatch();

  let brands = products.map((v) => v.company.toLowerCase());

  const uniqueBrands = brands.filter((v, i, s) => s.indexOf(v) === i);

  const filterProducts = (evt) => dispatch(FilterCreators.filter(evt.target.value));

  return (
    <React.Fragment>
      <Title></Title>
      <Filter>
        Filter by Brand:
        <Select onChange={filterProducts} value={filter}>
          <Option value="all">Show All</Option>
          {uniqueBrands.map((v, i) => (
            <Option key={i} value={v}>
              {v}
            </Option>
          ))}
        </Select>
      </Filter>

      <Container>
        <ProductsList filter={filter} />
      </Container>
    </React.Fragment>
  );
}

const Option = styled.option`
  text-transform: capitalize;
`;
const Container = styled.div`
  @media (min-width: 768px) {
    width: 100vw;
    overflow: hidden;
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
  @media (min-width: 768px) {
    margin: 20px auto;
  }
`;
