import React from "react";
import { Grid as GiphyGrid } from "@giphy/react-components";
import styled from "styled-components";

import { fetchTrendingGifs } from "../Utils/giphy";

/** Giphy grid */
export const Grid = () => {
  return (
    <GridContainer>
      <GiphyGrid fetchGifs={fetchTrendingGifs} width={800} columns={3} />;
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
