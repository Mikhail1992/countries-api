import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import actions from "../../actions";
import { dict } from "../../dict";
import "./styles.scss";

const ToggleLanguage = () => {
  const dispatch = useDispatch();
  const handleChangeLanguage = (lang) => {
    dispatch(actions.language.actions.setLanguage(lang));
  };
  const { currentLang } = useSelector((state) => ({
    currentLang: state.language,
  }));

  return (
    <div className="toggle-language">
      <div className="toggle-language__buttons">
        {Object.keys(dict).map((lang) => (
          <button
            key={lang}
            className={classnames("toggle-language__button", {
              "toggle-language__button_active": lang === currentLang,
            })}
            onClick={() => handleChangeLanguage(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToggleLanguage;
