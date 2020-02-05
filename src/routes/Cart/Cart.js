import React, {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import styled, {css} from "styled-components";
import CarouselSection from "../../components/Carousel/Carousel";
import InstallmentPlan from "../../components/Installment/Installment";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";
import {ProductItem} from "../../components/Products/Products";
import {CartCreators, ProductCreators} from "../../store/ducks";
import "./bin.css";
import V2Paypal from "./V2Paypal";

export default function CartPage({history}) {
  const [{items}, {status}, {products}] = useSelector((state) => [
    state.CartReducer,
    state.NotificationReducer,
    state.ProductReducer
  ]);
  let total = 0;
  return (
    <Window>
      {items && items.length > 0 ? (
        <Main>
          <Head MOBILE>My Cart</Head>

          <Section>
            {items.map((item, index) => {
              total += item.price * item.quantity;
              return <CartItem key={item.id} item={item} quantity={item.quantity} index={index} />;
            })}
          </Section>

          <Total total={total} history={history} />
        </Main>
      ) : (
        <>
          <Head EMPTY>The cart is empty :p</Head>
          <But>But you can add some! ;)</But>
          <CarouselSection status={status} products={products} />
        </>
      )}

      <MobileNavigation CART />
    </Window>
  );
}

const Window = styled.div`
  width: 100%;
  border-radius: 5px;
  position: relative;
`;

const Main = styled.main`
  position: relative;
  min-height: 600px;
`;

const Section = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 70vw;
  }
`;

const Head = styled.h1`
  position: relative;
  text-align: center;
  font-size: 1.6rem;
  margin-top: 125px;
  margin-bottom: 0;
  padding: 20px;
  color: #3784d2;

  @media (min-width: 768px) {
    margin-top: 20px;
    ${(props) =>
      props.EMPTY &&
      css`
        margin-top: 70px;
      `}
  }

  ${(props) =>
    props.EMPTY &&
    css`
      font-size: 1.6rem;
      color: #444;
      padding-bottom: 0;
    `}
`;

const But = styled.h2`
  position: relative;
  text-align: center;
  font-size: 2.5rem;
  margin: 0;
  color: #3784d2;
  padding: 20px;
`;

const CartItem = memo(function CartItem({item, index}) {
  const {price, quantity} = item;
  const dispatch = useDispatch();

  const decrement = () => {
    if (quantity <= 1) {
      return;
    }
    dispatch(CartCreators.decrement(item, index));
  };

  const increment = () => {
    dispatch(CartCreators.increment(item, index));
  };

  const history = useHistory();
  const gotoDetails = () => {
    history.push("/details/" + item.id);
  };

  const discardThis = () => {
    setTimeout(() => {
      dispatch(CartCreators.removeFromCart(item));
      dispatch(ProductCreators.outsideCart(item));
    }, 1000);
  };

  return (
    <ProductItem CART product={item} onClick={gotoDetails}>
      <div id="app-cover" onClick={discardThis}>
        <input type="checkbox" id="checkbox" />
        <div id="bin-icon">
          <div id="lid"></div>
          <div id="box">
            <div id="box-inner">
              <div id="bin-lines"></div>
            </div>
          </div>
        </div>
        <div id="layer"></div>
      </div>

      <Inline>
        <Quantity>
          <Btn onClick={() => decrement()}>
            <i className="fas fa-minus" title="remove one"></i>
          </Btn>
          <Btn>{quantity}</Btn>
          <Btn onClick={() => increment()}>
            <i className="fas fa-plus" title="add one"></i>
          </Btn>
        </Quantity>

        <Unit>
          {(price * quantity).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
        </Unit>
      </Inline>
    </ProductItem>
  );
});

const Inline = styled.div`
  display: flex;
  width: calc(100% - 131px);
  position: absolute;
  bottom: 0;
  right: 0;
  margin-left: 120px;
  background-image: linear-gradient(120deg, #338, #335);
  align-items: center;
  border-radius: 5px 0 0 0;
  padding: 6px;
  max-width: 200px;
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

const Quantity = styled.div`
  display: flex;
  flex: 2;
  border-radius: 5px;
`;

const Btn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  width: 33.3%;
  color: #fff;
`;

const Unit = styled.div`
  display: inline-block;
  flex: 1;
  padding-left: 5px;
  color: #fff;
  font-weight: bold;
`;

function Total({total, history}) {
  const checklist = useSelector((state) => state.CartReducer);

  return (
    <Container>
      <InstallmentPlan amount={total} />

      <V2Paypal total={total} history={history} checklist={checklist} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-top: 80px;
  @media (min-width: 768px) {
    margin-top: 70px;
    margin-bottom: 100px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 5px;
    width: 300px;
  }
  @media (min-width: 1000px) {
    width: 400px;
  }
`;
