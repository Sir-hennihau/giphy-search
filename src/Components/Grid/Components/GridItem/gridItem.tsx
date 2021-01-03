import React from "react";
import IGif from "@giphy/js-types/dist/gif";
import { GridItemStyledContainer } from "./Components/gridItemStyledContainer";
import { GridItemStyledAnchor } from "./Components/gridItemStyledAnchor";
import { GridItemStyledImage } from "./Components/gridItemStyledImage";

interface GridItemProps {
  gif: IGif;
}

/**
 * Single item in the grid.
 * Can be clicked on to navigate to Giphys's website.
 */
export const GridItem = ({ gif }: GridItemProps) => (
  <GridItemStyledContainer>
    <GridItemStyledAnchor href={gif.url} target="_blank">
      <GridItemStyledImage alt={gif.title} src={gif.images.preview_webp.url} />
    </GridItemStyledAnchor>
  </GridItemStyledContainer>
);
