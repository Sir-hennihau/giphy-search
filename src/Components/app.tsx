import React from "react";
import styled from "styled-components";
import { SearchContext } from "../Utils/search";

import { Grid } from "./grid";
import { Headline } from "./headline";
import { SearchBar } from "./searchBar";
import { SearchContextWrapper } from "./searchContextWrapper";

export const App = () => (
  <SearchContextWrapper>
    <StyledMain>
      <AppContainer>
        <StyledHeader>
          <Headline>Giphy Search</Headline>

          <SearchBar />
        </StyledHeader>
        <Grid />
      </AppContainer>
    </StyledMain>
  </SearchContextWrapper>
);

const AppContainer = styled.div`
  width: 800px;

  padding: 20px;
  /*   @media only screen and (max-width: 556px) {
    padding: 0 20px;
  } */
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: white;
  padding: 20px 0;
  z-index: 2;
`;
