import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import styled, {css} from "styled-components";
import {CartCreators, NotificationCreators, ProductCreators} from "../../store/ducks/index";
import * as C from "../../styled/blocks/card/index";
import {ADD_BUTTON} from "../../styled/elements/index";
import {TextOrIcon} from "../index";

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

  const history = useHistory();
  const dispatch = useDispatch();

  let amount = [];
  let i = 0;
  let copy = reviews.media;

  while (i < Math.abs(reviews.media)) {
    if (copy - 1 >= 0) {
      amount.push("fas fa-star");
    } else {
      amount.push("fas fa-star-half-alt");
    }
    copy--;
    i++;
  }

  const handleClick = async () => {
    if (status === true) {
      dispatch(NotificationCreators.closeNotification(prev));
    }
    dispatch(CartCreators.addToCart(product));
    dispatch(ProductCreators.insideCart(product));
    dispatch(NotificationCreators.openNotification(product));
  };

  const goDetails = (evt) => {
    history.push(`/details/${id}`);

    function smooth(target, duration) {
      let targetPosition = target.getBoundingClientRect().top;
      let startPosition = window.pageYOffset;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;

        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, targetPosition, duration);

        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
      window.requestAnimationFrame(animation);
    }
    let target = document.querySelector("#here");

    smooth(target, 800);
    setTimeout(() => addFocus(target), 1000);

    function addFocus(t) {
      t.nextSibling.focus();
      if (document.activeElement === t.nextSibling) {
        return false;
      } else {
        t.nextSibling.setAttribute("tabindex", "-1"); // Adding tabindex for elements not focusable
        t.nextSibling.focus(); // Set focus again
      }
    }
  };
  window.AOS.init({
    easing: "ease",
    duration: 1800,
    once: true
  });

  return (
    <C.default CART={CART} CAROUSEL={CAROUSEL}>
      {/* <Ripplefy> */}
      <C.__CONTAINER CART={CART} CAROUSEL={CAROUSEL} id="container" onClick={goDetails}>
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
            {amount.map((v, i) => (
              <C.__STAR key={i} className={v}></C.__STAR>
            ))}{" "}
            {reviews.media.toFixed(1)} - {reviews.count}k
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
