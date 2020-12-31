import React from "react";
import { Grid as GiphyGrid } from "@giphy/react-components";
import styled from "styled-components";

import { fetchSearchedGifs, fetchTrendingGifs } from "../Utils/giphy";

/** Giphy grid */
export const Grid = () => {
  return (
    <GridContainer>
      <GiphyGrid
        columns={3}
        fetchGifs={fetchSearchedGifs("Vibing dogs")}
        noResultsMessage="There was an error retrieving the data."
        width={800}
      />
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
