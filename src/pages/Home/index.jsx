import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { FormattedMessage } from "react-intl";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import actions from "../../actions";
import ListOfCountries from "../../components/ListOfCountries";
import ToggleLanguage from "../../components/ToggleLanguage";
import "./styles.scss";

const SHORT_NAME = "SHORT_NAME";
const FULL_NAME = "FULL_NAME";
const CODE = "CODE";
const CURRENCY = "CURRENCY";

const listOfSearchTypes = {
  [SHORT_NAME]: {
    title: "Short Name",
    action: actions.countries.actions.fetchCountryByShortName,
    field: "demonym",
  },
  [FULL_NAME]: {
    title: "Full Name",
    action: actions.countries.actions.fetchCountryByName,
    field: "name",
  },
  [CODE]: {
    title: "Code",
    action: actions.countries.actions.fetchCountryByCode,
    field: "alpha3Code",
  },
  [CURRENCY]: {
    title: "Currency",
    action: actions.countries.actions.fetchCountryByCurrency,
    field: "currencies",
  },
};

function App() {
  const dispatch = useDispatch();
  const [searchType, setSearchType] = useState(SHORT_NAME);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    dispatch(actions.countries.actions.fetchAll());
  }, [dispatch]);

  const { listOfCountries, error } = useSelector((state) => ({
    listOfCountries: get(state, ["countries", "list"], []),
    error: state.countries.error,
  }));

  const fetchData = AwesomeDebouncePromise(
    (value) => dispatch(listOfSearchTypes[searchType].action(value)),
    500
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleClick = () => {
    const hasCurrentInput = Object.values(listOfCountries).some((item) =>
      item[listOfSearchTypes[searchType].field].includes(inputValue)
    );
    if (!hasCurrentInput) {
      fetchData(inputValue);
    }
  };

  const output = inputValue
    ? Object.values(listOfCountries).filter((country) => {
        return country[listOfSearchTypes[searchType].field].includes(
          inputValue
        );
      })
    : [];

  return (
    <div className="home-container">
      {error && <div style={{ color: "red" }}>{JSON.stringify(error)}</div>}
      <ToggleLanguage />

      <form className="form" onSubmit={handleSubmit}>
        <div className="form__head">
          <label className="form__label">
            <span className="form__label-text">Choose type of search</span>
            <select
              className="form__select"
              onChange={(e) => setSearchType(e.target.value)}
              value={searchType}
            >
              {Object.entries(listOfSearchTypes).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.title}
                </option>
              ))}
            </select>
          </label>

          <div className="form__row">
            <input
              className="form__input"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="form__button" onClick={handleClick}>
              <FormattedMessage id="home.button.find" />
            </button>
          </div>
        </div>
      </form>
      <ListOfCountries list={output} />
    </div>
  );
}

export default App;
