import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import { dict } from "./dict";

const App = () => {
  const { language } = useSelector((state) => ({
    language: state.language,
  }));
  return (
    <IntlProvider locale={language} messages={dict[language]}>
      <Home />
    </IntlProvider>
  );
};

export default App;
