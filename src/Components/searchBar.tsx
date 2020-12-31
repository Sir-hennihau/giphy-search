import React from "react";
import styled from "styled-components";

import { getSearchPlaceholderString } from "../Utils/search";

interface SearchBarProps {}

export const SearchBar = ({}: SearchBarProps) => {
  return (
    <StyledInputContainer>
      <StyledInput placeholder={getSearchPlaceholderString()} />
    </StyledInputContainer>
  );
};

const StyledInputContainer = styled.nav`
  display: flex;
  width: 100%;
`;

const StyledInput = styled.input`
  background: #f2f2f2;
  border-radius: 5px;
  font-size: 20px;
  margin: 25px 0;
  padding: 10px;

  width: 100%;
`;
