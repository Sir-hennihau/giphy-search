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
        <Headline>Giphy Search</Headline>

        <SearchBar />

        <Grid />
      </AppContainer>
    </StyledMain>
  </SearchContextWrapper>
);

const AppContainer = styled.div`
  width: 800px;
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;
