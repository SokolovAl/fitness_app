import {BODY_PART_LIST_URL, OPTIONS} from "./constants";

const fetchBodyPartsData = () => {
    return fetch(BODY_PART_LIST_URL, OPTIONS)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error("Error fetching body parts data:", error);
            return [];
        });
};

export default fetchBodyPartsData;
