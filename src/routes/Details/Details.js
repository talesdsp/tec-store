import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {AddedToCart, TextOrIcon} from "../../components";
import {CartCreators, NotificationCreators, ProductCreators} from "../../store/ducks/";
import {ADD_BUTTON, TEXT} from "../../styled/ELEMENTS";

export default function DetailsPage({match}) {
  const [{status}, {products}] = useSelector((state) => [
    state.NotificationReducer,
    state.ProductReducer
  ]);

  const product = products[match.params.product - 1];
  const dispatch = useDispatch();
  let history = useHistory();

  const {company, img, info, price, name, inCart} = product;

  const handleClick = () => {
    dispatch(CartCreators.addToCart(product));
    dispatch(ProductCreators.insideCart(product));
    dispatch(NotificationCreators.openNotification(product));

    setTimeout(() => dispatch(NotificationCreators.closeNotification(product)), 3000);
  };

  const goBack = (evt) => history.push("/");

  return (
    <Details>
      {status && <AddedToCart product={product} />}
      <Section>
        <Title>{name}</Title>
        <Image src={`${process.env.PUBLIC_URL}/${img}`} alt="product" />
      </Section>

      <Section>
        <Subhead>Model:</Subhead>
        <TEXT>{name}</TEXT>

        <Subhead>Made by:</Subhead>
        <TEXT>{company}</TEXT>

        <Subhead>Price:</Subhead>
        <TEXT>{price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</TEXT>

        <Subhead>Details:</Subhead>
        <TEXT>{info}</TEXT>

        <Row>
          <Back onClick={goBack}>Back to products</Back>
          <Add disabled={inCart ? true : false} onClick={handleClick}>
            <TextOrIcon inCart={inCart} />
          </Add>
        </Row>
      </Section>
    </Details>
  );
}
const Details = styled.div`
  padding: 102px 20px 20px;
`;

const Section = styled.section``;

const Title = styled.h2``;

const Image = styled.img`
  width: 100%;
`;

const Subhead = styled.h2`
  margin-bottom: 5px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

// ? The code below inherits the style then appends the css in JS
const Back = styled(ADD_BUTTON)((props) => ({
  backgroundColor: "#335",
  position: "relative",
  border: "1px solid #335",
  flex: "1",
  color: "#fff",
  cursor: "pointer"
}));

const Add = styled(ADD_BUTTON)((props) => ({
  position: "relative",
  border: "1px solid #fff",
  borderRadius: " 0 .5em 0 0",
  flex: "1"
}));
