import {Link} from "react-router-dom";
import styled from "styled-components";

export const A = styled(Link)`
  display: block;
  width: fit-content;
  text-decoration: none;
  color: #fff;
  transition: color 0.5s ease-out;

  &:hover {
    color: #0ee;
  }

  &:active {
    color: #0ee;
  }
`;
