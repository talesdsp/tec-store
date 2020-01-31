import React, {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled, {css} from "styled-components";
import {CartCreators} from "../../store/ducks/cart";
import V2Paypal from "./V2Paypal";

export default function CartPage({history}) {
  const {items} = useSelector((state) => state.CartReducer);

  let total = 0;
  return (
    <Window>
      {items && items.length > 0 ? (
        <>
          <Description>
            <Li>Product</Li>
            <Li>Name</Li>
            <Li>Price</Li>
            <Li>Quantity</Li>
            <Li>Remove</Li>
            <Li>Total</Li>
          </Description>

          {items.map((item, index) => {
            total += item.price * item.quantity;
            return <CartItem key={item.id} item={item} quantity={item.quantity} index={index} />;
          })}

          <Total total={total} history={history} />
        </>
      ) : (
        "There is no products in the cart"
      )}
    </Window>
  );
}

const Window = styled.div`
  width: 100%;
  position: relative;
`;

const CartItem = memo(function CartItem({item, index}) {
  const {img, name, price, quantity} = item;
  const dispatch = useDispatch();
  const decrement = () => {
    if (quantity === 1) {
      return;
    }
    dispatch(CartCreators.decrement(item, index));
  };

  const increment = () => {
    dispatch(CartCreators.increment(item, index));
  };

  return (
    <Description>
      <Li>
        <img src={img} alt="" />
      </Li>
      <Li>
        <h5 className="">{name}</h5>
      </Li>
      <Li>
        <h5 className="">{price}</h5>
      </Li>
      <Li>
        <button onClick={() => decrement()}>-</button>
        <button>{quantity}</button>
        <button onClick={() => increment()}>+</button>
      </Li>
      <Li>
        <button onClick={() => dispatch(CartCreators.removeFromCart(item))}> remover </button>
      </Li>
      <Li>
        Item Total is{" "}
        {(price * quantity).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
      </Li>
    </Description>
  );
});

function Total({total, history}) {
  const dispatch = useDispatch();
  const checklist = useSelector((state) => state.CartReducer);

  return (
    <div>
      <button onClick={() => dispatch(CartCreators.clearCart())}></button>
      <>{total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</>

      <V2Paypal total={total} history={history} checklist={checklist} />
    </div>
  );
}

const Li = styled.section`
  flex: 1;
  display: block;
  margin: auto;
  overflow: hidden;
  max-height: max-content;
  min-width: 200px;
  min-height: 100px;

  @media (min-width: 768px) {
  }
`;

const Description = styled.section`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  text-align: center;

  ${(props) =>
    props.row &&
    css`
      flex-direction: row;
    `}
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `};
`;
