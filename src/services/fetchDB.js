import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

export const tokenToHeader = {
  set(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common["Authorization"] = "";
  },
};

/*
 * Create data base item
 */
const post = (url, item = null) =>
  axios
    .post(url, item)
    .then(({ data }) => data)
    .catch((error) => {
      throw error;
    });

/*
 * Read data base items
 */
const get = (url) =>
  axios
    .get(url)
    .then(({ data }) => data)
    .catch((error) => {
      throw error;
    });

/*
 * Delete data base item
 */
const del = (url) =>
  axios
    .delete(url)
    .then()
    .catch((error) => {
      throw error;
    });

export default { post, get, del };
