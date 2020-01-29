import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {CartCreators, NotificationCreators, ProductCreators} from "../../store/ducks";
import Notification from "../../styled/blocks/Notification";
import {A} from "../../styled/elements/A";
import {Text} from "../../styled/elements/Text";

const AddedToCart = ({notification}) => {
  const {status, product} = notification;
  const {name, img} = product;
  const dispatch = useDispatch();

  if (status) setTimeout(() => dispatch(NotificationCreators.closeNotification(product)), 4000);

  return (
    <Notification>
      <Notification.Message>Added to cart</Notification.Message>
      <Notification.Product>
        <Notification.Image src={img} alt="" />
        <Notification.Name>{name}</Notification.Name>
      </Notification.Product>
    </Notification>
  );
};

export default function ProductsList() {
  const [{products}, notification] = useSelector((state) => [
    state.ProductReducer,
    state.NotificationReducer
  ]);

  return (
    <Section>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} inCart={p.inCart} />
      ))}
      {notification.status && <AddedToCart notification={notification} />}
    </Section>
  );
}

const Section = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ProductItem = React.memo(function ProductItem({product, inCart}) {
  const {id, name, img, price, company, reviews} = product;
  const [stars, updateStars] = useState(0);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(CartCreators.addToCart(product));
    dispatch(ProductCreators.insideCart(product));
    dispatch(NotificationCreators.openNotification(product));
  };

  useEffect(() => {}, [reviews]);

  return (
    <A to={`/details/${id}`}>
      <Card>
        <Header>
          <Image src={img} alt="product" />

          <Button disabled={inCart ? true : false} onClick={handleClick}>
            <TextOrIcon inCart={inCart} />
          </Button>
        </Header>

        {/* card footer */}
        <Info>
          <Brand>{company}</Brand>
          <Name>{name}</Name>

          <Star className="fas fa-star"></Star>
          <Star className="fas fa-star-half-alt"></Star>

          <Price>{price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</Price>
        </Info>
      </Card>
    </A>
  );
});

const Star = styled.div`
  color: #ff0;
  text-shadow: 0 0 1px #000;
  padding: 1px;
`;

const TextOrIcon = ({inCart}) =>
  inCart ? <Text>in cart</Text> : <i className="fas fa-cart-plus"></i>;

const Card = styled.div`
  width: 100vw;
  height: 120px;
  text-align: left;
  position: relative;
  border: 1px solid #0ff;
  transition: all 0.5s linear;
  justify-self: center;
  background-color: #fff;
  overflow: hidden;
  display: flex;

  align-items: center;
  flex: row;
  padding: 0;

  @media (min-width: 768px) {
    width: max-content;
    flex-direction: column;
    height: 300px;
  }

  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;

const Header = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  @media (min-width: 768px) {
    flex: 2;
  }
`;

const Image = styled.img`
  position: relative;
  overflow: hidden;
  height: 80%;
  transition: all 0.5s linear;

  ${Header}:hover & {
    transform: scale(1.3);
  }
`;

const Brand = styled.div`
  color: #888;
  font-size: 0.9rem;
  text-transform: capitalize;
  margin: 0;
`;

const Name = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 1.1rem;
`;

const Price = styled.div`
  color: var(--buy-color);
`;

const Button = styled.button`
  position: absolute;
  margin: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: white;
  border: 1px solid #eee;
  padding: 0.2rem 0.6rem;
  border-top-left-radius: 0.5rem;
  margin: 0;
  font-size: 1.4rem;

  transform: translate(100%, 100%);
  transition: transform 0.5s ease-in-out;

  ${Header}:hover & {
    transform: translate(0, 0);
  }

  @media (min-width: 768px) {
  }
`;

const Info = styled.div`
  position: relative;
  background: transparent;
  border: none;
  transition: all 0.5s linear;
  width: 100%;
  padding: 60px 20px;
  margin: 0;
  ${Card}:hover & {
    background: rgba(244, 244, 244, 1);
  }

  @media (min-width: 768px) {
    flex: 1;
  }
`;
