import { GifsResult } from "@giphy/js-fetch-api";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { getGifs } from "../Utils/giphy";
import { SearchContext as Context } from "../Utils/search";

/** Giphy grid */
export const Grid = () => {
  const { search } = useContext(Context);
  const [gifs, setGifs] = useState<GifsResult>();

  useEffect(() => {
    (async () => {
      const trendingGifs = await getGifs(search);

      setGifs(trendingGifs);

      console.log("trendingsGifs", trendingGifs);
    })();
  }, [search]);

  return (
    <GridContainer>
      {gifs?.data.map((gif, index) => (
        <img
          alt={gif.title}
          key={index}
          src={gif.images.preview_webp.url}
          width="100%"
        />
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 25px;
  width: 100%;
`;
