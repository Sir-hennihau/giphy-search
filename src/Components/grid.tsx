import React from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

import { Grid as GiphyGrid } from "@giphy/react-components";
import { GIPHY_API_KEY } from "../Utils/giphy";
import styled from "styled-components";

interface GridProps {}

const giphyFetch = new GiphyFetch(GIPHY_API_KEY);

const fetchGifs = (offset: number) => giphyFetch.trending({ offset, limit: 9 });
/** Giphy grid */
export const Grid = ({}: GridProps) => {
  return (
    <GridContainer>
      <GiphyGrid fetchGifs={fetchGifs} width={800} columns={3} />;
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
