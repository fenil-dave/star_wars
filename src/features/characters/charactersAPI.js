import { getCharacters } from "../../api";

// A mock function to mimic making an async request for data
export function fetchCharacters(page = 1) {
    return getCharacters(page);
}
