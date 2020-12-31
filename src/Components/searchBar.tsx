import { debounce } from "lodash";
import React, { useCallback, useContext } from "react";
import styled from "styled-components";

import { getSearchPlaceholderString, SearchContext } from "../Utils/search";

interface SearchBarProps {}

export const SearchBar = ({}: SearchBarProps) => {
  const { setSearch } = useContext(SearchContext);

  /*
   * Debounce set search, because it will trigger an API call on every keystroke otherwise.
   * We got API usage limits.
   */
  const debouncedSetSearch = useCallback(
    debounce((search: string) => setSearch(search), 300),
    []
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetSearch(event.target.value);
  };

  return (
    <StyledInputContainer>
      <StyledInput
        onChange={onChange}
        placeholder={getSearchPlaceholderString()}
      />
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
