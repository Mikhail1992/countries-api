import { takeLatest, put, call, all } from "redux-saga/effects";
import actions from "../actions";
import { api } from "../api";

function* fetchAll(action) {
  try {
    const response = yield call(api.countries.getAll, action.payload);
    yield put(actions.countries.actions.fetchAllSuccess(response));
  } catch (e) {
    yield put(actions.countries.actions.fetchAllFailure(e.message));
  }
}

function* fetchCountryByShortName(action) {
  try {
    const response = yield call(api.countries.getByShortName, action.payload);
    yield put(
      actions.countries.actions.fetchCountryByShortNameSuccess(response)
    );
  } catch (e) {
    yield put(
      actions.countries.actions.fetchCountryByShortNameFailure(e.message)
    );
  }
}

function* fetchCountryByName(action) {
  try {
    const response = yield call(api.countries.getByFullName, action.payload);
    yield put(actions.countries.actions.fetchCountryByNameSuccess(response));
  } catch (e) {
    yield put(actions.countries.actions.fetchCountryByNameFailure(e.message));
  }
}

function* fetchCountryByCode(action) {
  try {
    const response = yield call(api.countries.getByCode, action.payload);
    yield put(actions.countries.actions.fetchCountryByCodeSuccess(response));
  } catch (e) {
    yield put(actions.countries.actions.fetchCountryByCodeFailure(e.message));
  }
}

function* fetchCountryByCurrency(action) {
  try {
    const response = yield call(api.countries.getByCurrency, action.payload);
    yield put(
      actions.countries.actions.fetchCountryByCurrencySuccess(response)
    );
  } catch (e) {
    yield put(
      actions.countries.actions.fetchCountryByCurrencyFailure(e.message)
    );
  }
}

// function* fetchListOfCountriesCodes(action) {
//   try {
//     const response = yield call(api.countries.getByShortName, action.payload);
//     yield put(actions.countries.actions.fetchListOfCountriesCodesSuccess(response));
//   } catch (e) {
//     yield put(actions.countries.actions.fetchListOfCountriesCodesFailure(e.message));
//   }
// }

export default function* watchCountries() {
  yield all([
    takeLatest(actions.countries.actionTypes.FETCH_ALL, fetchAll),
    takeLatest(
      actions.countries.actionTypes.FETCH_COUNTRY_BY_SHORT_NAME,
      fetchCountryByShortName
    ),
    takeLatest(
      actions.countries.actionTypes.FETCH_COUNTRY_BY_NAME,
      fetchCountryByName
    ),
    takeLatest(
      actions.countries.actionTypes.FETCH_COUNTRY_BY_CODE,
      fetchCountryByCode
    ),
    takeLatest(
      actions.countries.actionTypes.FETCH_COUNTRY_BY_CURRENCY,
      fetchCountryByCurrency
    ),
    // takeLatest(
    //   actionsCountries.actionTypes.FETCH_LIST_OF_COUNRIES_CODES,
    //   fetchListOfCountriesCodes
    // ),
  ]);
}
