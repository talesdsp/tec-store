import styled, {css} from "styled-components";

const Item = styled.section`
  flex: 1;
  display: block;
  margin: auto;
  overflow: hidden;
  max-height: max-content;
  min-width: 200px;
  min-height: 100px;

  @media (min-width: 768px) {
  }
`;

const List = styled.section`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  text-align: center;

  ${(props) =>
    props.row &&
    css`
      flex-direction: row;
    `}
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `};
`;

List.Item = Item;

export default List;
