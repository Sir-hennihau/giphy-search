import React, { useState } from "react";
import IGif from "@giphy/js-types/dist/gif";
import styled from "styled-components";

interface GridItemProps {
  gif: IGif;
}

export const GridItem = ({ gif }: GridItemProps) => (
  <div>
    <StyledGridItemContainer>
      <StyledAnchor href={gif.url} target="_blank">
        <StyledImage alt={gif.title} src={gif.images.preview_webp.url} />
      </StyledAnchor>
    </StyledGridItemContainer>
  </div>
);

const StyledGridItemContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  z-index: -2;
`;

const StyledAnchor = styled.a`
  height: 100%;
  width: 100%;
`;
