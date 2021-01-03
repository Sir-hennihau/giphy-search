import { debounce } from "lodash";
import React, { useCallback, useContext } from "react";

import { getSearchPlaceholderString, SearchContext } from "../../Utils/search";
import { SearchBarStyledInput } from "./Components/searchBarStyledInput";
import { SearchBarStyledInputContainer } from "./Components/searchBarStyledInputContainer";

export const SearchBar = () => {
  // --- STATE ---

  const { setSearch } = useContext(SearchContext);

  // -- HELPERS ---

  /*
   * Debounce set search, because it will trigger an API call on every keystroke otherwise.
   * We got API usage limits.
   */
  const debouncedSetSearch = useCallback(
    debounce((search: string) => setSearch(search), 300),
    [setSearch]
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetSearch(event.target.value);
  };

  // --- RENDER ---

  return (
    <SearchBarStyledInputContainer>
      <SearchBarStyledInput
        onChange={onChange}
        placeholder={getSearchPlaceholderString()}
      />
    </SearchBarStyledInputContainer>
  );
};
