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
  console.log(filter);
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
    width: 90vw;
    margin: 0 5vw;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  ${(props) => props.mode === "carousel" && css``}
`;

export const ProductItem = React.memo(function ProductItem({
  children,
  product,
  inCart,
  status,
  prev,
  __cart
}) {
  const {id, name, img, info, price, company, reviews} = product;
  // const [stars, updateStars] = useState(0);
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (status === true) {
      dispatch(NotificationCreators.closeNotification(prev));
    }
    dispatch(CartCreators.addToCart(product));
    dispatch(ProductCreators.insideCart(product));
    dispatch(NotificationCreators.openNotification(product));
  };

  let history = useHistory();

  const goDetails = () => !__cart && history.push(`/details/${id}`);

  return (
    <C.default>
      {/* <Ripplefy> */}
      <C.__CONTAINER onClick={goDetails}>
        <C.__HEADER>
          <C.__IMAGE src={img} alt="product" />
        </C.__HEADER>

        <C.__INFO>
          <C.__BRAND>{company}</C.__BRAND>
          <C.__NAME>{name}</C.__NAME>

          <C.__REVIEWS>
            {
              <>
                <C.__STAR className="fas fa-star"></C.__STAR>
                <C.__STAR className="fas fa-star-half-alt"></C.__STAR>
              </>
            }{" "}
            {reviews} reviews
          </C.__REVIEWS>

          {!__cart ? (
            <C.__PRICE>
              {price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
            </C.__PRICE>
          ) : (
            children
          )}
          <C.__DESCRIPTION>{info.substring(0, 50)}...</C.__DESCRIPTION>
        </C.__INFO>
        {/* </Ripplefy> */}
      </C.__CONTAINER>

      {!__cart && (
        <Add disabled={inCart ? true : false} onClick={handleClick}>
          <TextOrIcon inCart={inCart} color="#338" />
        </Add>
      )}
    </C.default>
  );
});

const Add = styled(ADD_BUTTON)`
  box-shadow: 5px 5px 7px #000;
`;
