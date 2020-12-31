import React, { ReactNode, useCallback, useMemo, useState } from "react";
import { SearchContext } from "../Utils/search";

interface SearchContextWrapperProps {
  children: ReactNode;
}

export const SearchContextWrapper = ({
  children,
}: SearchContextWrapperProps) => {
  const [search, setSearch] = useState("");

  const searchContextValue = useMemo(() => ({ search, setSearch }), [search]);

  console.log("search", search);

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
};
