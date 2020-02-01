import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {TextOrIcon} from "../../components";
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

  const {company, img, info, price, name, inCart, details} = product;

  const handleClick = () => {
    dispatch(CartCreators.addToCart(product));
    dispatch(ProductCreators.insideCart(product));
    dispatch(NotificationCreators.openNotification(product));

    setTimeout(() => status && dispatch(NotificationCreators.closeNotification(product)), 3000);
  };

  const goBack = (evt) => history.push("/");

  return (
    <Details>
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

        <Subhead>Description:</Subhead>
        <TEXT>{info}</TEXT>

        <Subhead>Details:</Subhead>
        <Table>
          {details.map((v) => (
            <Row key={v}>
              <Label>{v[0]}</Label>
              <Answer>{v[1]}</Answer>
            </Row>
          ))}
        </Table>

        <CTA>
          <Back onClick={goBack}>
            <i class="fas fa-angle-left fa-2x"></i>
          </Back>
          <Add disabled={inCart ? true : false} onClick={handleClick}>
            <TextOrIcon inCart={inCart} color="#fff" />
          </Add>
        </CTA>
      </Section>
    </Details>
  );
}
const Details = styled.div`
  padding: 102px 20px 20px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const Table = styled.section`
  background-color: #335;
  border-radius: 5px;
  margin: 20px 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid springgreen;
  color: #fff;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div`
  padding: 20px 0 20px 0px;
  text-transform: capitalize;
  margin-left: 20px;
  width: max-content;
  flex: 1;
  color: #3c91e6;
`;

const Answer = styled(TEXT)`
  padding-left: 20px;
  flex: 3;
  color: #fff;
`;

const Section = styled.section``;

const Title = styled.h2`
  color: #3c91e6;
`;

const Image = styled.img`
  width: 100%;
`;

const Subhead = styled.h2`
  color: #3c91e6;
  margin-bottom: 5px;
`;

const CTA = styled.div`
  position: fixed;
  width: 100vw;
  height: 10.1vh;
  margin: 0;
  padding: 0;
  left: 0;
  bottom: 0;
  display: flex;
  background-image: linear-gradient(90deg, #335, #338);
  flex-direction: row;
  justify-content: center;
  @media (min-width: 768px) {
    height: 10vh;
    width: unset;
    bottom: unset;
    position: relative;
  }
`;

// ? The code below inherits the style then appends the css in JS
const Back = styled(ADD_BUTTON)((props) => ({
  // backgroundColor: "#335",
  position: "relative",
  height: "100%",
  backgroundColor: "transparent",
  flex: "1",
  padding: 0,
  color: "#fff",
  borderColor: "transparent",
  borderRadius: "0",
  cursor: "pointer"
}));

const Add = styled(ADD_BUTTON)((props) => ({
  backgroundColor: "transparent",
  padding: 0,
  height: "100%",
  borderColor: "transparent",
  position: "relative",
  borderRadius: " 0",
  flex: "1"
}));
