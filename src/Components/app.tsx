import React from "react";
import styled from "styled-components";

import { Grid } from "./grid";
import { Headline } from "./headline";
import { SearchBar } from "./searchBar";

export const App = () => (
  <StyledMain>
    <AppContainer>
      <Headline>Giphy Search</Headline>

      <SearchBar />

      <Grid />
    </AppContainer>
  </StyledMain>
);

const AppContainer = styled.div`
  width: 800px;
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;
