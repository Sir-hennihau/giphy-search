import axios from "axios";
import { GifsResult } from "@giphy/js-fetch-api";

/**
 * My giphy API key.
 * For the sake of simplicity, I will keep it stored in a const for now. It is a free development key with limited API usage.
 * In a production environment, keep this in a .env file for example.
 */
export const GIPHY_API_KEY = "gzpMMyTKr2LO966A2JMxlOmnjnDix1MH";

export const getGifs = async (search?: string) => {
  if (!search || search === "") {
    const trendingGifsResponse = await axios.get<GifsResult>(
      "https://api.giphy.com/v1/gifs/trending",
      {
        params: { api_key: GIPHY_API_KEY },
      }
    );

    return trendingGifsResponse.data;
  }

  const searchedGifsResponse = await axios.get<GifsResult>(
    "https://api.giphy.com/v1/gifs/search",
    {
      params: {
        api_key: GIPHY_API_KEY,
        q: search,
      },
    }
  );

  return searchedGifsResponse.data;
};
