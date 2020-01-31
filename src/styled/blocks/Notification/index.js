import styled, {keyframes} from "styled-components/";

const Message = styled.div`
  text-align: center;
  padding: 10px;
  background: #338;
  color: #fff;
`;

const Image = styled.img`
  width: 80%;
  overflow: hidden;
  flex: 1;
`;

const Name = styled.p`
  flex: 2;
`;

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
  position: relative;
  display: flex;
  flex-direction: row;
  color: #000;
  align-items: center;
  overflow: hidden;
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
  height: 110px;
  width: 220px;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 5px;
  z-index: 2;
  animation: ${notificate} 3s linear;
  &:hover {
    background-color: #fff;
  }

  @media (min-width: 768px) {
    height: 140px;
    width: 300px;
  }
`;

Notification.Message = Message;
Notification.Product = Product;
Notification.Image = Image;
Notification.Name = Name;

export default Notification;
