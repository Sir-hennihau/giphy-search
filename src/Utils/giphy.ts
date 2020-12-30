import { GiphyFetch } from "@giphy/js-fetch-api";

/*
 * My giphy API key.
 * For the sake of simplicity, I will keep it stored like that for now. It is a free development key with limited API usage.
 * In a production environment, keep this in a .env file for example.
 */
export const GIPHY_API_KEY = "gzpMMyTKr2LO966A2JMxlOmnjnDix1MH";

const giphyFetch = new GiphyFetch(GIPHY_API_KEY);

export const fetchTrendingGifs = (offset: number) =>
  giphyFetch.trending({ offset, limit: 9 });
