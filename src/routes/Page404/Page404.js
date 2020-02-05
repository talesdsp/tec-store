import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";

export default function Page404() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => history.push("/"), 3000);
  });

  return (
    <>
      <Message>Oops. This page does not exist.</Message>

      <H2>Redirecting back in 3s</H2>
    </>
  );
}

const Message = styled.h1`
  color: #3784d2;
  font-size: 2rem;
`;
const H2 = styled.h2`
  color: #3784d2;
  font-size: 1.6rem;
`;
