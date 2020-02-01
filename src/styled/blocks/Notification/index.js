import styled, {keyframes} from "styled-components/";

const notificate = keyframes`
0%{
  transform: translateY(-2em);
  opacity: 0;
}
20%{
  transform: initial;
  opacity: 1;
}
80%{
  
  transform: initial;
  opacity: 1;
}

100%{
  transform: translateY(-2em);
  opacity: 0;

  }
`;

const Notification = styled.div`
  all: unset;
  align-items: center;
  margin: 0;
  top: 0;
  right: 0;
  background-color: #eee;
  font-size: 1rem;
  position: fixed;
  height: 102.2px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  z-index: 2;
  animation: ${notificate} 3s linear;
  &:hover {
    background-color: #fff;
  }

  @media (min-width: 768px) {
    height: 140px;
    width: 300px;
    border-radius: 0 0 5px 5px;
  }
`;

const Message = styled.div`
  text-align: center;
  padding: 10px;
  background: #335;
  color: #fff;
`;

const Product = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  color: #000;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Image = styled.img`
  width: 70px;
  overflow: hidden;
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const Name = styled.p`
  @media (min-width: 768px) {
    flex: 2;
  }
`;

Notification.Message = Message;
Notification.Product = Product;
Notification.Image = Image;
Notification.Name = Name;

export default Notification;
