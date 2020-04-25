import httpClient from "./httpClient";
import countriesApi from "./countriesApi";

export function apiFactory(http) {
  return {
    countries: countriesApi(http),
  };
}

const http = httpClient("https://restcountries.eu");

export const api = apiFactory(http);
