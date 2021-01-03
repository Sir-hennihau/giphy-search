import axios from "axios";
import { GifsResult } from "@giphy/js-fetch-api";

/**
 * My giphy API key.
 * For the sake of simplicity, I will keep it stored in a const for now. It is a free development key with limited API usage.
 * In a production environment, keep this in a .env file for example.
 */
export const GIPHY_API_KEY = "gzpMMyTKr2LO966A2JMxlOmnjnDix1MH";

export const DEFAULT_GIPHY_PAGINATION_OFFSET = 50;

/**
 * Network request to get GIFs from API.
 *
 * Either gets Giphy's trending GIFs or GIFs for a specific search query.
 *
 * @returns Promise of both GIF and pagination information.
 */
export const getGifs = async (offset: number, search?: string) => {
  let gifsResponse;

  if (!search || search === "") {
    gifsResponse = await axios.get<GifsResult>(
      "https://api.giphy.com/v1/gifs/trending",
      {
        params: { offset, api_key: GIPHY_API_KEY },
      }
    );
  } else {
    gifsResponse = await axios.get<GifsResult>(
      "https://api.giphy.com/v1/gifs/search",
      {
        params: {
          offset,
          api_key: GIPHY_API_KEY,
          q: search,
        },
      }
    );
  }

  return {
    gifs: gifsResponse.data.data,
    offset: gifsResponse.data.pagination.offset,
    totalGifsCount: gifsResponse.data.pagination.total_count,
  };
};
