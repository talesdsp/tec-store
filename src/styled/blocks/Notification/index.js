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

const NOTIFICATION = styled.div`
  all: unset;
  align-items: center;
  margin: 0;
  padding: 0;
  top: 0;
  right: 0;
  background-color: #eee;
  font-size: 1rem;
  position: fixed;
  height: 102.2px;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  z-index: 9999;
  animation: ${notificate} 3s linear;
  &:hover {
    background-color: #fff;
  }

  @media (min-width: 768px) {
    height: 120px;
    width: 300px;
    border-radius: 0 0 5px 5px;
  }
`;

export const __MESSAGE = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 1.2rem;
  position: relative;
  background-image: linear-gradient(120deg, #338, springgreen);
  color: #fff;
`;

export const __PRODUCT = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  color: #000;
  align-items: center;
  overflow: hidden;
  border-radius: 0 0 0 5px;
  justify-content: center;
`;

export const __IMAGE = styled.img`
  width: 58px;
  overflow: hidden;
  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const __NAME = styled.p`
  font-size: 1.2rem;
  margin: 0 0 0 10px;
  color: #000;

  @media (min-width: 768px) {
    flex: 2;
  }
`;

export default NOTIFICATION;
