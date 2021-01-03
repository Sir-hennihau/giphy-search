import React from "react";

import { Grid } from "../Grid/grid";
import { Headline } from "../Headline/headline";
import { SearchBar } from "../SearchBar/searchBar";
import { SearchContextWrapper } from "../searchContextWrapper";
import { AppStyledContainer } from "./Components/appStyledContainer";
import { AppStyledHeader } from "./Components/appStyledHeader";
import { AppStyledMain } from "./Components/appStyledMain";

export const App = () => (
  <SearchContextWrapper>
    <AppStyledMain>
      <AppStyledContainer>
        <AppStyledHeader>
          <Headline>Giphy Search</Headline>

          <SearchBar />
        </AppStyledHeader>

        <Grid />
      </AppStyledContainer>
    </AppStyledMain>
  </SearchContextWrapper>
);
