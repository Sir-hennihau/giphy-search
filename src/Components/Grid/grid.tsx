import IGif from "@giphy/js-types/dist/gif";
import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { DEFAULT_GIPHY_PAGINATION_OFFSET, getGifs } from "../../Utils/giphy";
import { SearchContext as Context } from "../../Utils/search";
import { GrindEndMessage } from "./Components/GridItem/Components/gridEndMessage";
import { GridItem } from "./Components/GridItem/gridItem";
import { GridStyledContainer } from "./Components/gridStyledContainer";

/**
 * Grid that displays searched GIFs. Supports infinite scrolling.
 */
export const Grid = () => {
  // --- STATE ---

  const { search } = useContext(Context);
  const [gifs, setGifs] = useState<IGif[]>();

  /**
   * Describes Giphy's search API offset for GIF entries. Used for pagination.
   */
  const [offset, setOffset] = useState(0);

  /**
   * Describes wether API can deliver more search results for infinite scrolling.
   */
  const [hasMoreGifs, setHasMoreGifs] = useState(true);

  /**
   * Total GIF count that can be delivered by API.
   */
  const [totalGifsCount, setTotalGifsCount] = useState(0);

  // --- EFFECTS ---

  /**
   * Handles search changes.
   */
  useEffect(() => {
    window.scrollTo({ top: 0 });

    (async () => {
      const gifsResponse = await getGifs(0, search);

      setGifs(gifsResponse.gifs);
      increaseOffset();
      setTotalGifsCount(gifsResponse.totalGifsCount);
    })();
  }, [search]);

  // --- HELPERS ---

  /**
   * Callback function to invoke on reaching end of grid.
   * Adds next GIFs into feed.
   */
  const onNext = async () => {
    if (!gifs) {
      return;
    }

    if (gifs.length + offset > totalGifsCount) {
      return setHasMoreGifs(false);
    }

    const gifsResponse = await getGifs(offset, search);

    const newGifs = [...gifs, ...gifsResponse.gifs];
    setGifs(newGifs);
    increaseOffset();
  };

  const increaseOffset = () =>
    setOffset(offset + DEFAULT_GIPHY_PAGINATION_OFFSET);

  // --- RENDER ---

  if (gifs?.length === 0) {
  }

  return (
    <InfiniteScroll
      dataLength={gifs?.length || 0}
      endMessage={<GrindEndMessage />}
      hasMore={hasMoreGifs}
      loader={<h2>Loading...</h2>}
      next={onNext}
      style={{ width: "100%" }}
    >
      <GridStyledContainer>
        {gifs?.map((gif, index) => (
          <GridItem gif={gif} key={index} />
        ))}
      </GridStyledContainer>
    </InfiniteScroll>
  );
};
