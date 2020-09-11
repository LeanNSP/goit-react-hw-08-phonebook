import axios from "axios";

axios.defaults.baseURL = "http://localhost:3100";

/*
 * Create data base item
 */
const post = (url, item) =>
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
 * Update data base item
 */
const patch = (url, newItemProperty) =>
  axios
    .patch(url, newItemProperty)
    .then()
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

export default { post, get, patch, del };
