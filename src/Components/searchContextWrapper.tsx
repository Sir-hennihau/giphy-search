import React, { ReactNode, useCallback, useMemo, useState } from "react";
import { SearchContext } from "../Utils/search";

interface SearchContextWrapperProps {
  children: ReactNode;
}

/**
 * Wrapper component that manages search context.
 */
export const SearchContextWrapper = ({
  children,
}: SearchContextWrapperProps) => {
  // --- STATE ---

  const [search, setSearch] = useState("");

  // --- MEMOIZED ---

  const searchContextValue = useMemo(() => ({ search, setSearch }), [search]);

  // --- RENDER ---

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
};
