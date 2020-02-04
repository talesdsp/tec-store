import React, {useState} from "react";
import styled, {css} from "styled-components";
import {ProductItem} from "../Products/Products";

function CarouselSection({status, products}) {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", async () => setWidth(window.innerWidth));

  const scrollLeft = async (evt) => {
    let l = evt.target.nextSibling.children;

    // conditional in case the user press this button before mounted
    if (l) l[0].scrollBy(-(width / 2), 0);
  };

  const scrollRight = async (evt) => {
    let r = evt.target.previousSibling.children;
    // console.log(d.scrollWidth, d.offsetWidth, d.clientWidth);
    if (r) r[0].scrollBy(width / 2, 0);
  };

  return (
    <Carousel>
      <Arrow left onClick={scrollLeft}>
        <i className="fas fa-hand-point-left fa-2x" title="Scroll Left"></i>
      </Arrow>
      <Trick>
        <Scroll>
          {products.map((v) => (
            <ProductItem CAROUSEL key={v.id} product={v} status={status} inCart={v.inCart} />
          ))}
        </Scroll>
      </Trick>
      <Arrow right onClick={scrollRight}>
        <i className="fas fa-hand-point-right fa-2x" title="Scroll Right"></i>
      </Arrow>
    </Carousel>
  );
}

export default CarouselSection;

const Carousel = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: auto auto;
  width: 80vw;
  align-items: center;
  margin-bottom: 100px;

  @media (min-width: 768px) {
    width: 70vw;
  }
`;

const Arrow = styled.button`
  color: springgreen;
  position: absolute;
  background-color: #335;
  border-color: transparent;
  border-radius: 5px;
  padding: 20px;
  margin: auto 0;
  z-index: 1;
  i {
    pointer-events: none;
  }

  ${(props) =>
    props.left &&
    css`
      left: -30px;
    `}

  ${(props) =>
    props.right &&
    css`
      right: -30px;
    `}

  .disabled {
    color: #eee;
    background-color: #fff;
  }
`;

const Trick = styled.div`
  overflow: hidden;
  position: relative;
`;

const Scroll = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 10px;
  flex-direction: row;
  scroll-behavior: smooth;
  margin-bottom: -17px;
`;
