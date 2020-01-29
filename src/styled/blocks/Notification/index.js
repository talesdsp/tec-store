import styled, {keyframes} from "styled-components/";

const Message = styled.div`
  text-align: center;
  background: #fff;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  overflow: hidden;
`;

const Name = styled.p``;

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

const Product = styled.div`
  display: flex;
  flex-direction: row;
`;

const Notification = styled.div`
  all: unset;
  position: absolute;
  align-items: center;
  margin: 0;
  top: 0;
  right: 0;
  background-color: #eee;
  position: fixed;
  height: 100px;
  width: 150px;
  overflow: hidden;
  border-radius: 5px;
  z-index: 2;
  animation: ${notificate} 3s linear;
  &:hover {
    background-color: #fff;
  }

  @media (min-width: 768px) {
    height: 100px;
    width: 300px;
  }
`;

Notification.Message = Message;
Notification.Product = Product;
Notification.Image = Image;
Notification.Name = Name;

export default Notification;
