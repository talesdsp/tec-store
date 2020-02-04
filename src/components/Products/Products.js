import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import styled, {css} from "styled-components";
import {TextOrIcon} from "..";
import {CartCreators, NotificationCreators, ProductCreators} from "../../store/ducks";
import * as C from "../../styled/blocks/CARD";
import {ADD_BUTTON} from "../../styled/ELEMENTS";

export default function ProductsList({filter}) {
  const [{products}, {status, prev}] = useSelector((state) => [
    state.ProductReducer,
    state.NotificationReducer
  ]);

  return (
    <>
      <Section>
        {filter !== "all"
          ? products
              .filter((v) => v.company.toLowerCase() === filter.toLowerCase())
              .map((v) => (
                <ProductItem key={v.id} product={v} status={status} prev={prev} inCart={v.inCart} />
              ))
          : products.map((v) => (
              <ProductItem key={v.id} product={v} status={status} prev={prev} inCart={v.inCart} />
            ))}
      </Section>
    </>
  );
}

const Section = styled.section`
  @media (min-width: 768px) {
    display: flex;
    width: 70vw;
    margin: 0 0 0 200px;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 1000px) {
    margin-left: 16vw;
  }
  ${(props) => props.mode === "CAROUSEL" && css``}
`;

export const ProductItem = React.memo(function ProductItem({
  children,
  product,
  inCart,
  status,
  prev,
  CART,
  CAROUSEL
}) {
  const {id, name, img, info, price, company, reviews} = product;
  // const [stars, updateStars] = useState(0);
  const dispatch = useDispatch();

  console.log(inCart);

  const handleClick = async () => {
    if (status === true) {
      dispatch(NotificationCreators.closeNotification(prev));
    }
    dispatch(CartCreators.addToCart(product));
    dispatch(ProductCreators.insideCart(product));
    dispatch(NotificationCreators.openNotification(product));
  };

  let history = useHistory();

  const goDetails = () => !CART && history.push(`/details/${id}`);

  return (
    <C.default CART={CART} CAROUSEL={CAROUSEL}>
      {/* <Ripplefy> */}
      <C.__CONTAINER CART={CART} CAROUSEL={CAROUSEL} onClick={goDetails}>
        <C.__HEADER CART={CART} CAROUSEL={CAROUSEL}>
          <C.__IMAGE
            CART={CART}
            CAROUSEL={CAROUSEL}
            src={process.env.PUBLIC_URL + "/" + img}
            alt="product"
          />
        </C.__HEADER>

        <C.__INFO CART={CART} CAROUSEL={CAROUSEL}>
          <C.__BRAND>{company}</C.__BRAND>
          <C.__NAME CART={CART}>{name}</C.__NAME>

          <C.__REVIEWS>
            {
              <>
                <C.__STAR className="fas fa-star"></C.__STAR>
                <C.__STAR className="fas fa-star-half-alt"></C.__STAR>
              </>
            }{" "}
            {reviews} reviews
          </C.__REVIEWS>
          {!CART && (
            <C.__PRICE>
              {price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
            </C.__PRICE>
          )}

          <C.__DESCRIPTION CAROUSEL={CAROUSEL}>{info.substring(0, 50)}...</C.__DESCRIPTION>
        </C.__INFO>
        {/* </Ripplefy> */}
      </C.__CONTAINER>
      {CART && children}
      {!CART && (
        <>
          <Add disabled={inCart ? true : false} onClick={handleClick}>
            <TextOrIcon inCart={inCart} color="#fff" />
          </Add>
        </>
      )}
    </C.default>
  );
});

const Add = styled(ADD_BUTTON)`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 35px;
  border-radius: 0.5rem 0 0 0;
  width: 60px;
  background-color: #338;
  z-index: 1;
  ${(props) =>
    props.disabled &&
    css`
      background-color: unset;
      box-shadow: unset;
    `}
`;
