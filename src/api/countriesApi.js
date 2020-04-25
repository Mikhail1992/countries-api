export default (http) => {
  return {
    getAll: () => {
      return http.get("/rest/v2/all");
    },
    getByShortName: (name) => {
      return http.get(`/rest/v2/name/${name}`);
    },

    getByFullName: (name) => {
      return http.get(`/rest/v2/name/${name}?fullText=true`);
    },

    getByCode: (code) => {
      return http.get(`/rest/v2/alpha/${code}`);
    },

    getByCurrency: (currency) => {
      return http.get(`/rest/v2/currency/${currency}`);
    },
  };
};
