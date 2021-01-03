import styled from "styled-components";

export const GridStyledContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: auto auto auto;
  width: 100%;

  @media only screen and (max-width: 556px) {
    grid-template-columns: auto;
  }
`;
