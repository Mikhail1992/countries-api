const SUCCESS = "SUCCESS";
const FAIL = "FAIL";

export const createTypes = (types, namespace) => {
  return types.reduce((typeMap, type) => {
    return { ...typeMap, [type]: namespace ? `${namespace}_${type}` : type };
  }, {});
};

export const actionCreator = (type) => {
  return (payload) => ({ type, payload });
};

export const async = (type) => {
  return [type, `${type}_${SUCCESS}`, `${type}_${FAIL}`];
};
