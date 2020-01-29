import styled from "styled-components";

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
  height: 100%;
  transition: all 0.5s linear;

  ${Header}:hover & {
    transform: scale(1.3);
  }
`;

const Brand = styled.h1`
  color: #888;
  font-size: 0.8rem;
  text-transform: capitalize;
  margin: 0;
`;

const Name = styled.h2`
  font-size: 1.2rem;
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

Card.Header = Header;
Card.Image = Image;
Card.Info = Info;
Card.Brand = Brand;
Card.Name = Name;
Card.Price = Price;
Card.Button = Button;

export default Card;
