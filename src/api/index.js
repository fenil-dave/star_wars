import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api";

export const getCharacters = (page) =>
    axios.get(`/people/?page=${page}`).then((_) => _.data);
