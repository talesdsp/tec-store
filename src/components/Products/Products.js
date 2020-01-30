import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {CartCreators, NotificationCreators, ProductCreators} from "../../store/ducks";
import Notification from "../../styled/blocks/Notification";
import {A} from "../../styled/elements/A";
import {Text} from "../../styled/elements/Text";

const AddedToCart = ({product}) => {
  return (
    <A to="/cart">
      <Notification>
        <Notification.Message>Added to cart</Notification.Message>
        <Notification.Product>
          <Notification.Image src={product.img} alt="" />
          <Notification.Name>{product.name}</Notification.Name>
        </Notification.Product>
      </Notification>
    </A>
  );
};

export default function ProductsList() {
  const [{products}, {status, product, prev}] = useSelector((state) => [
    state.ProductReducer,
    state.NotificationReducer
  ]);

  return (
    <Section>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} status={status} prev={prev} inCart={p.inCart} />
      ))}
      {status && <AddedToCart product={product} />}
    </Section>
  );
}

const Section = styled.section`
  width: fit-content;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const ProductItem = React.memo(function ProductItem({product, inCart, status, prev}) {
  const {id, name, img, info, price, company, reviews} = product;
  // const [stars, updateStars] = useState(0);
  console.log({prev});
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (status === true) {
      dispatch(NotificationCreators.closeNotification(prev));
    }

    dispatch(CartCreators.addToCart(product));
    dispatch(ProductCreators.insideCart(product));

    dispatch(NotificationCreators.openNotification(product));

    setTimeout(() => dispatch(NotificationCreators.closeNotification(product)), 3000);
  };
  useEffect(() => {}, [reviews, status]);

  return (
    <Card>
      <Container to={`/details/${id}`}>
        <Header>
          <Image src={img} alt="product" />
        </Header>

        {/* card footer */}
        <Info>
          <Brand>{company}</Brand>
          <Name>{name}</Name>
          <Star className="fas fa-star"></Star>
          <Star className="fas fa-star-half-alt"></Star>
          <Price>{price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</Price>
          <Description>{info.substring(0, 60)}...</Description>
        </Info>
      </Container>
      <Button disabled={inCart ? true : false} onClick={handleClick}>
        <TextOrIcon inCart={inCart} />
      </Button>
    </Card>
  );
});

const TextOrIcon = ({inCart}) =>
  inCart ? (
    <Text>in cart</Text>
  ) : (
    <i style={{fontSize: "1rem", color: "#338"}} className="fas fa-cart-arrow-down"></i>
  );

const Card = styled.div`
  width: 90vw;
  height: 120px;
  text-align: left;
  position: relative;
  box-shadow: -3px -3px 9px rgba(255, 255, 255, 1), 3px 3px 9px rgba(0, 0, 0, 0.4);
  transition: all 0.5s linear;
  justify-self: center;
  background-color: #fff;
  overflow: hidden;
  display: block;
  margin: 20px 5vw;
  align-items: center;
  padding: 0;
  border-radius: 5px;
  transition: all 1s linear;

  @media (min-width: 768px) {
    margin: 20px;
    height: unset;
    min-width: 200px;
    max-width: 17vw;
  }
`;

const Container = styled(A)`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const Header = styled.div`
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  flex: 1;
  height: 100%;

  @media (min-width: 768px) {
    flex: 3;
    border-color: transparent;
  }
`;

const Image = styled.img`
  position: absolute;
  overflow: hidden;
  height: 100%;
  transition: transform 0.5s ease-out;

  ${Header}:hover & {
    transform: scale(1.3);
  }

  @media (min-width: 500px) {
    right: 0;
  }

  @media (min-width: 768px) {
    position: relative;
    right: unset;
    height: unset;
    width: 100%;
  }
`;

const Info = styled.div`
  position: relative;
  box-sizing: border-box;
  background: transparent;
  border: 3px solid transparent;
  transition: all 0.5s ease-in-out;
  padding: 15px;
  margin: 0;
  border-radius: 5px;
  flex: 2;

  &:hover {
    border-left: 3px solid #555;
    flex: 20;
    width: 100%;
  }

  @media (min-width: 768px) {
    width: unset;
    flex: 1;
    &:hover {
      flex: 12;
    }
  }

  @media (min-width: 940px) {
    &:hover {
      flex: 8;
    }
  }

  @media (min-width: 1200px) {
    &:hover {
      flex: 3;
    }
  }
`;

const Brand = styled.div`
  width: fit-content;
  color: #888;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 0;
`;

const Name = styled.div`
  width: fit-content;
  color: #000;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

const Star = styled.div`
  color: #ff0;
  text-shadow: -1px -1px 1px #333, -1px 1px 1px #333, 1px -1px 1px #333, 1px 1px 1px #333;
  padding: 1px 2px;
  margin-bottom: 5px;
`;

const Price = styled.div`
  width: fit-content;
  font-size: 1.15rem;
  margin: 2px 0;
  color: var(--buy-color);
`;

const Description = styled.div`
  position: absolute;
  color: #888;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  transform: translate(100%, 0);
  display: block;
  padding: 5vw 0;
  top: 0;
  right: 5%;
  left: 57%;
  font-size: 0.9rem;

  ${Info}:hover & {
    transform: initial;
    opacity: 1;
  }

  @media (min-width: 450px) {
    left: 50%;
  }
  @media (min-width: 500px) {
    left: 30%;
  }

  @media (min-width: 768px) {
    padding: 5px 20px 20px 0;
    right: unset;
    left: unset;
    top: unset;
    transform: translate(0, 100%);

    ${Info}:hover & {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  @media (min-width: 1000px) {
    padding: 5px 20px 0 0;
  }
`;

const Button = styled.button`
  position: absolute;
  cursor: ${(props) => (props.disabled === true ? "auto" : "grab")};
  margin: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: white;
  border: 1px solid #eee;
  width: 66px;
  height: 30px;
  border-top-left-radius: 0.5rem;
  transition: transform 0.5s ease-in-out;

  @media (min-width: 768px) {
    /* transform: translate(100%, 100%); */
  }
`;
