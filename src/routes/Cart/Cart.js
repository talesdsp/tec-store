import React, {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {CartCreators} from "../../store/ducks/cart";
import List from "../../styled/blocks/List";
import V2Paypal from "./V2Paypal";

export default function CartPage({history}) {
  const {items} = useSelector((state) => state.CartReducer);

  let total = 0;
  return (
    <CartContainer>
      {items && items.length > 0 ? (
        <>
          {/* <List row>
            <List.Item>Product</List.Item>
            <List.Item>Name</List.Item>
            <List.Item>Price</List.Item>
            <List.Item>Quantity</List.Item>
            <List.Item>Remove</List.Item>
            <List.Item>Total</List.Item>
          </List> */}

          {items.map((item, index) => {
            total += item.price * item.quantity;
            return <CartItem key={item.id} item={item} quantity={item.quantity} index={index} />;
          })}

          <Total total={total} history={history} />
        </>
      ) : (
        "There is no products in the cart"
      )}
    </CartContainer>
  );
}

const CartContainer = styled.div`
  min-height: 500px;
  max-height: max-content;
  margin: 0;
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
    <List
      column
      style={{
        display: "flex",
        padding: "40px 0",
        height: "200px",
        width: "100%",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
        background: "#fff"
      }}
    >
      <List.Item style={{flex: 1}}>
        <img
          src={img}
          style={{border: "1ps solid rgba(0,0,0,.2)", width: "80%", overflow: "hidden"}}
          alt=""
        />
      </List.Item>
      <List.Item style={{flex: 1}}>
        <h5 className="">{name}</h5>
      </List.Item>
      <List.Item style={{flex: 1}}>
        <h5 className="">{price}</h5>
      </List.Item>
      <List.Item style={{flex: 1}}>
        <button style={{width: "20%"}} onClick={() => decrement()}>
          -
        </button>
        <button style={{width: "20%", margin: "20px"}}>{quantity}</button>
        <button style={{width: "20%"}} onClick={() => increment()}>
          +
        </button>
      </List.Item>
      <List.Item style={{flex: 1}}>
        <button onClick={() => dispatch(CartCreators.removeFromCart(item))}> remover </button>
      </List.Item>
      <List.Item style={{flex: 1}}>Item Total is {price * quantity}</List.Item>
    </List>
  );
});

function Total({total, history}) {
  const dispatch = useDispatch();
  const checklist = useSelector((state) => state.CartReducer);

  return (
    <div>
      <button onClick={() => dispatch(CartCreators.clearCart())}></button>
      <h2>{total.toLocaleString("us", {style: "currency", currency: "USD"})}</h2>
      <V2Paypal total={total} history={history} checklist={checklist} />
    </div>
  );
}
