import { get } from "lodash";
import actions from "../actions";

const initialState = {
  list: {},
  codes: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.countries.actionTypes.FETCH_ALL_SUCCESS:
      return {
        ...state,
        codes: {
          ...state.codes,
          ...action.payload.map((item) => item.alpha3Code),
        },
        error: null,
      };
    case actions.countries.actionTypes.FETCH_COUNTRY_BY_NAME_SUCCESS:
    case actions.countries.actionTypes.FETCH_COUNTRY_BY_SHORT_NAME_SUCCESS:
    case actions.countries.actionTypes.FETCH_COUNTRY_BY_CURRENCY_SUCCESS:
      const countries = get(action, ["payload"], null);
      if (!countries) return state;
      const newCountries = countries.reduce(
        (acc, country) => ({ ...acc, [country.name]: country }),
        {}
      );

      return {
        ...state,
        list: { ...state.list, ...newCountries },
        error: null,
      };

    case actions.countries.actionTypes.FETCH_COUNTRY_BY_CODE_SUCCESS:
      const country = get(action, ["payload"], null);
      if (!country) return state;
      const name = country.name;
      return {
        ...state,
        list: { ...state.list, [name]: country },
        error: null,
      };
    case actions.countries.actionTypes.FETCH_ALL_FAIL:
    case actions.countries.actionTypes.FETCH_COUNTRY_BY_NAME_FAIL:
    case actions.countries.actionTypes.FETCH_COUNTRY_BY_SHORT_NAME_FAIL:
    case actions.countries.actionTypes.FETCH_COUNTRY_BY_CURRENCY_FAIL:
    case actions.countries.actionTypes.FETCH_COUNTRY_BY_CODE_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
