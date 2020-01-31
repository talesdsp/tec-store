import React from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {CartCreators, ProductCreators} from "../../store/ducks/";
import {A, Text} from "../../styled/elements/";

export default function Details({match}) {
  const product = useSelector((state) => state.ProductReducer.products[match.params.product - 1]);
  const dispatch = useDispatch();
  const {company, title, img, info, price, inCart} = product;

  const handleClick = () => {
    dispatch(CartCreators.addToCart(product));
    dispatch(ProductCreators.insideCart(product));
  };

  return (
    <DetailsContainer className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>

          {/* Product info */}
          <div className="row">
            {/* Product image */}
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <img src={`${process.env.PUBLIC_URL}/${img}`} alt="product" className="img-fluid" />
            </div>

            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <h2>Model: {title}</h2>

              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                Made by: <span className="text-uppercase">{company}</span>
              </h4>

              <h4 className="text-blue">
                <strong>
                  Price: <span>$</span>
                  {price}
                </strong>
              </h4>

              <p className="text-capitalize font-weight-bold mt-3 mb-0">
                some info about this product:
              </p>
              <Text>{info}</Text>
              <A to="/">back to products</A>
              <div>
                <div
                  onClick={handleClick}
                  style={{width: "200px", position: "relative", height: "100px"}}
                >
                  {inCart ? "inCart" : "add to cart"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailsContainer>
  );
}
const DetailsContainer = styled.div``;
