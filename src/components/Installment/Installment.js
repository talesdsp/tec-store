import React from "react";
import styled from "styled-components";

export default function InstallmentPlan({amount}) {
  return (
    <>
      <Amount>{amount.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</Amount>
      <Installment>Up to 12x interest-free payments</Installment>
      <Details>
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
  color: #3784d2;
`;
const Installment = styled.span`
  color: #3784d2;
  font-weight: bold;
  font-size: 1.2rem;
  flex: 1;
`;

const Details = styled.details`
  padding: 20px 20px 30px 20px;
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
