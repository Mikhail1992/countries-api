import { createTypes, async, actionCreator } from "../utils/actions";

export const actionTypes = createTypes([
  ...async("FETCH_ALL"),
  ...async("FETCH_COUNTRY_BY_SHORT_NAME"),
  ...async("FETCH_COUNTRY_BY_NAME"),
  ...async("FETCH_COUNTRY_BY_CODE"),
  ...async("FETCH_COUNTRY_BY_CURRENCY"),
  ...async("FETCH_LIST_OF_COUNRIES_CODES"),
]);

export const actions = {
  fetchAll: actionCreator(actionTypes.FETCH_ALL),
  fetchAllSuccess: actionCreator(actionTypes.FETCH_ALL_SUCCESS),
  fetchAllFailure: actionCreator(actionTypes.FETCH_ALL_FAIL),

  fetchCountryByShortName: actionCreator(
    actionTypes.FETCH_COUNTRY_BY_SHORT_NAME
  ),
  fetchCountryByShortNameSuccess: actionCreator(
    actionTypes.FETCH_COUNTRY_BY_SHORT_NAME_SUCCESS
  ),
  fetchCountryByShortNameFailure: actionCreator(
    actionTypes.FETCH_COUNTRY_BY_SHORT_NAME_FAIL
  ),

  fetchCountryByName: actionCreator(actionTypes.FETCH_COUNTRY_BY_NAME),
  fetchCountryByNameSuccess: actionCreator(
    actionTypes.FETCH_COUNTRY_BY_NAME_SUCCESS
  ),
  fetchCountryByNameFailure: actionCreator(
    actionTypes.FETCH_COUNTRY_BY_NAME_FAIL
  ),

  fetchCountryByCode: actionCreator(actionTypes.FETCH_COUNTRY_BY_CODE),
  fetchCountryByCodeSuccess: actionCreator(
    actionTypes.FETCH_COUNTRY_BY_CODE_SUCCESS
  ),
  fetchCountryByCodeFailure: actionCreator(
    actionTypes.FETCH_COUNTRY_BY_CODE_FAIL
  ),

  fetchCountryByCurrency: actionCreator(actionTypes.FETCH_COUNTRY_BY_CURRENCY),
  fetchCountryByCurrencySuccess: actionCreator(
    actionTypes.FETCH_COUNTRY_BY_CURRENCY_SUCCESS
  ),
  fetchCountryByCurrencyFailure: actionCreator(
    actionTypes.FETCH_COUNTRY_BY_CURRENCY_FAIL
  ),

  fetchListOfCountriesCodes: actionCreator(
    actionTypes.FETCH_LIST_OF_COUNRIES_CODES
  ),
  fetchListOfCountriesCodesSuccess: actionCreator(
    actionTypes.FETCH_LIST_OF_COUNRIES_CODES_SUCCESS
  ),
  fetchListOfCountriesCodesFailure: actionCreator(
    actionTypes.FETCH_LIST_OF_COUNRIES_CODES_FAIL
  ),
};
