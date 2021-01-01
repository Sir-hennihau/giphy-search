import { GifsResult } from "@giphy/js-fetch-api";
import IGif from "@giphy/js-types/dist/gif";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

import { getGifs } from "../Utils/giphy";
import { SearchContext as Context } from "../Utils/search";

/** Giphy grid */
export const Grid = () => {
  const { search } = useContext(Context);
  const [gifs, setGifs] = useState<IGif[]>();
  const [offset, setOffset] = useState(0);
  const [isMore, setIsMore] = useState(true);
  const [totalGifsCount, setTotalGifsCount] = useState(0);

  const increaseOffset = () => setOffset(offset + 50);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    (async () => {
      const gifsResponse = await getGifs(0, search);

      setGifs(gifsResponse.gifs);
      increaseOffset();
      setTotalGifsCount(gifsResponse.totalGifsCount);
    })();
  }, [search]);

  if (!gifs) {
    return <></>;
  }

  if (gifs.length === 0) {
    return <h2>No gifs could be found for your search.</h2>;
  }

  const onNext = async () => {
    if (gifs.length + offset > totalGifsCount) {
      return setIsMore(false);
    }

    const gifsResponse = await getGifs(offset, search);

    const newGifs = [...gifs, ...gifsResponse.gifs];
    setGifs(newGifs);
    increaseOffset();
  };

  return (
    <InfiniteScroll
      dataLength={gifs?.length}
      endMessage={<h2>There are no more search results.</h2>}
      next={onNext}
      hasMore={true}
      loader={<h2>Loading...</h2>}
    >
      <GridContainer>
        {gifs?.map((gif, index) => (
          <img
            alt={gif.title}
            key={index}
            src={gif.images.preview_webp.url}
            width="100%"
          />
        ))}
      </GridContainer>
    </InfiniteScroll>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 25px;
  width: 100%;
`;
