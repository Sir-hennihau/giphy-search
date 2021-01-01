import { sample } from "lodash";
import { createContext } from "react";

const SEARCH_PLACEHOLDER_STRINGS = [
  "Search for your favourite tv show",
  '"Vibing dogs"',
  "Enter your name here",
  "Find GIFs from Giphy",
  "How do you feel today?",
];

/**
 * @returns Random placeholder for search input.
 */
export const getSearchPlaceholderString = () =>
  sample(SEARCH_PLACEHOLDER_STRINGS);

export const SearchContext = createContext<{
  search: string;
  setSearch: (search: string) => void;
}>({ search: "", setSearch: (search) => undefined });
