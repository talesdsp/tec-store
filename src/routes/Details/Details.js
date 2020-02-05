import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import styled, {css} from "styled-components";
import CarouselSection from "../../components/Carousel/Carousel";
import InstallmentPlan from "../../components/Installment/Installment";
import {SideMenu} from "../../components/Menu/Menu";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";
import {CartCreators, NotificationCreators, ProductCreators} from "../../store/ducks";
import {TEXT} from "../../styled/elements";

export default function DetailsPage({match}) {
  const [{status}, {products}] = useSelector((state) => [
    state.NotificationReducer,
    state.ProductReducer
  ]);

  const thisProduct = products[match.params.product - 1];
  const {img, info, price, name, inCart, details} = thisProduct;

  const dispatch = useDispatch();

  const history = useHistory();
  const handleClick = () => {
    dispatch(CartCreators.addToCart(thisProduct));
    dispatch(ProductCreators.insideCart(thisProduct));
    dispatch(NotificationCreators.openNotification(thisProduct));
    history.push("/cart");
  };

  return (
    <Details>
      {/* // ! Fixed left side menu /  pc only */}
      <SideMenu PC />

      <Section main>
        <Image src={`${process.env.PUBLIC_URL}/${img}`} alt={name} />

        <Cart>
          <InstallmentPlan amount={price} />
          <Btn disabled={inCart ? true : false} onClick={handleClick}>
            Buy
          </Btn>
        </Cart>
      </Section>

      {/* //! product description */}
      <Section>
        <Title MOBILE strong>
          {name}
        </Title>

        <Subhead>Description:</Subhead>
        <TEXT style={{color: "#444"}}>{info}</TEXT>

        <Subhead>Details:</Subhead>
        <Table>
          {details.map((v) => (
            <Row key={v}>
              <Label>{v[0]}</Label>
              <Answer>{v[1]}</Answer>
            </Row>
          ))}
        </Table>

        {/*  // ! navigation buttons. ? fixed bottom, mobile only */}
        <MobileNavigation inCart={thisProduct.inCart} thisProduct={thisProduct} />
      </Section>

      {/* // ! carousel on bottom page */}
      <CarouselSection status={status} products={products} />

      {/* // ! end of page */}
    </Details>
  );
}

const Section = styled.section`
  margin: auto;
  display: block;
  position: relative;
  @media (min-width: 768px) {
    margin-left: 180px;

    ${(props) =>
      props.main &&
      css`
        display: flex;
        flex-direction: row;
      `};
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;

  @media (min-width: 540px) {
    margin: 0 10vw;
  }

  @media (min-width: 768px) {
    margin: 0;
    width: 250px;
  }
  @media (min-width: 1000px) {
    flex: 2;
  }
`;

const Cart = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    right: 0;
    z-index: 2;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 260px;
  }
  @media (min-width: 1000px) {
    width: 400px;
  }
  @media (min-width: 1200px) {
    right: 5vw;
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const Subhead = styled.h2`
  color: #333;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Btn = styled.button`
  padding: 8px 21px;
  border: none;
  background-image: linear-gradient(120deg, springgreen, #338);
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5em;
  ${(props) =>
    props.disabled &&
    css`
      cursor: auto;
    `}
`;

const Details = styled.div`
  padding: 102px 20px 20px;
  position: relative;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const Table = styled.section`
  background-image: linear-gradient(120deg, #338, #335);

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
  color: springgreen;
`;

const Answer = styled(TEXT)`
  padding-left: 20px;
  flex: 3;
  color: #fff;
`;
