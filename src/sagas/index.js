import { all } from "redux-saga/effects";
import countries from "./countries";

export default function* rootSaga() {
  yield all([countries()]);
}
