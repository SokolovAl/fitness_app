import exerciseBD from "../secrets/exerciseDB-api-token.json";

export const BODY_PART_LIST_URL = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

export const OPTIONS = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": `${exerciseBD.token}`,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
    }
};