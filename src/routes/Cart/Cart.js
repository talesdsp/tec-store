import React, {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled, {css} from "styled-components";
import {ProductItem} from "../../components/Products/Products";
import {CartCreators} from "../../store/ducks/cart";

export default function CartPage({history}) {
  const [{items}, {products}, {status}] = useSelector((state) => [
    state.CartReducer,
    state.ProductReducer,
    state.NotificationReducer
  ]);

  function scrollLeft(evt) {
    evt.stopPropagation();
    if (evt.target.nextSibling) evt.target.nextSibling.scrollBy(-600, 0);
  }

  function scrollRight(evt) {
    evt.stopPropagation();
    if (evt.target.previousSibling) evt.target.previousSibling.scrollBy(600, 0);
  }

  let total = 0;
  return (
    <Window>
      {items && items.length > 0 ? (
        <>
          <Head>My Cart</Head>
          <Section>
            {items.map((item, index) => {
              total += item.price * item.quantity;
              return <CartItem key={item.id} item={item} quantity={item.quantity} index={index} />;
            })}
          </Section>

          <Total total={total} history={history} />
        </>
      ) : (
        <Head>There are no products in the cart</Head>
      )}
      <Section carousel>
        <Arrow left onClick={scrollLeft}>
          <i className="fas fa-hand-point-left fa-lg" title="Scroll Left"></i>
        </Arrow>
        <Scroll>
          {products.map((v) => {
            return <ProductItem key={v.id} product={v} status={status} inCart={v.inCart} />;
          })}
        </Scroll>
        <Arrow right onClick={scrollRight}>
          <i className="fas fa-hand-point-right fa-2x" title="Scroll Right"></i>
        </Arrow>
      </Section>
    </Window>
  );
}

const Arrow = styled.button`
  display: none;
  color: springgreen;
  background-color: #335;
  border-color: transparent;
  @media (min-width: 768px) {
    display: block;
    border-radius: 5px;
    padding: 20px;
    position: absolute;
    margin: auto 0;
    z-index: 1;
  }
  i {
    pointer-events: none;
  }

  ${(props) =>
    props.left &&
    css`
      left: -20px;
    `}

  ${(props) =>
    props.right &&
    css`
      right: -20px;
    `}
`;

const Section = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  ${(props) =>
    props.carousel &&
    css`
      align-items: center;
    `}

  @media (min-width: 768px) {
    flex-direction: row;
    width: 60vw;
  }
`;

const Scroll = styled.div`
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
  flex-direction: column;
  /* margin-bottom: -12px; */
  scrollbar-arrow-color: #fff;
  scrollbar-color: springgreen;
  scrollbar-base-color: #338;
  scrollbar-track-color: #fff;
  ::-webkit-scrollbar-button {
    color: red;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Head = styled.h1`
  position: relative;
  text-align: center;
  margin-top: 103px;
  padding: 20px;
`;

const Window = styled.div`
  width: 100%;
  border-radius: 5px;
  position: relative;
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

  return (
    <ProductItem __cart product={item}>
      <Bin onClick={() => dispatch(CartCreators.removeFromCart(item))}> remover </Bin>

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

const Bin = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const Inline = styled.div`
  display: flex;
  background-image: linear-gradient(120deg, #338, springgreen);
  align-items: center;
  border-radius: 5px;
  padding: 6px;
  width: 102%;
  @media (min-width: 768px) {
    width: 98%;
  }
`;

const Quantity = styled.div`
  flex: 3;
  display: flex;
  border-radius: 5px;
`;

const Btn = styled.button`
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
  text-shadow: 0px -0px 8px #fff, 2px 2px 8px #000;
  font-weight: bold;
`;

function Total({total, history}) {
  const dispatch = useDispatch();
  const checklist = useSelector((state) => state.CartReducer);

  return (
    <Container>
      <button onClick={() => dispatch(CartCreators.clearCart())}></button>

      <Amount>{total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</Amount>
      <Installment>Up to 12x interest-free payments</Installment>
      <Details>
        <Bgcolor>
          <Parcels>
            {[...Array(12)].map((v, i) => (
              <Parcel key={i}>
                <Times>{i + 1}X </Times>
                <Value>
                  {(total / (i + 1)).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
                </Value>
              </Parcel>
            ))}
          </Parcels>
        </Bgcolor>
      </Details>
      {/* <V2Paypal total={total} history={history} checklist={checklist} /> */}
    </Container>
  );
}
///////////
const Details = styled.details`
  padding: 20px 20px 30px 20px;
`;

const Bgcolor = styled.div`
  border-radius: 5px;
  background-image: linear-gradient(120deg, #338, #335);
`;

const Summary = styled.summary``;

const Parcels = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 156px;
  padding: 10px;
  padding-left: 20px;
  flex-wrap: wrap;
`;

const Parcel = styled.li`
  padding-top: 5px;
  margin-right: 10px;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  background-color: #fff;
  padding: 40px;
`;

const Amount = styled.div`
  font-size: 2rem;
  color: var(--buy-color);
`;
const Installment = styled.span`
  color: red;
  flex: 1;
`;

const Times = styled.div`
  flex: 1;
  color: springgreen;
`;

const Value = styled.div`
  flex: 1;
  color: #fff;
`;
