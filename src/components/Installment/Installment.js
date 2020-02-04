import React, {useState} from "react";
import styled from "styled-components";

export default function InstallmentPlan({amount}) {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <>
      <Amount>{amount.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</Amount>
      <Installment>Up to 12x interest-free payments</Installment>
      <Details open={width >= 1000}>
        <Bgcolor>
          <Parcels>
            {[...Array(12)].map((v, i) => (
              <Parcel key={i}>
                <Times>{i + 1}X </Times>
                <Value>
                  {(amount / (i + 1)).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}
                </Value>
              </Parcel>
            ))}
          </Parcels>
        </Bgcolor>
      </Details>
    </>
  );
}

const Amount = styled.div`
  font-size: 2rem;
  color: #338;
`;
const Installment = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: springgreen;
  flex: 1;
`;

const Details = styled.details`
  margin: 20px 0;
  color: #333;
`;

const Bgcolor = styled.div`
  border-radius: 5px;
  background-image: linear-gradient(120deg, #338, #335);
`;

const Parcels = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 156px;
  padding: 10px;
  padding-left: 20px;
  flex-wrap: wrap;
  margin-bottom: 0;
`;

const Parcel = styled.li`
  padding-top: 5px;
  margin-right: 10px;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Times = styled.div`
  flex: 1;
  color: springgreen;
`;

const Value = styled.div`
  flex: 1;
  color: #fff;
`;
