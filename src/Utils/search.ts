import { sample } from "lodash";

const SEARCH_PLACEHOLDER_STRINGS = [
  "Search for your favourite tv show",
  '"Vibing dogs"',
  "Enter your name here",
  "Find memes from Giphy",
  "How do you feel today?",
];

/**
 * @returns Random placeholder for search input.
 */
export const getSearchPlaceholderString = () =>
  sample(SEARCH_PLACEHOLDER_STRINGS);
