// External dependencies
//
const axios = require("axios");

export const fetchQuestions = () => (dispatch) => {
  axios
    .get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    .then((response) => {
      dispatch({
        type: "FETCH_QUESTIONS_SUCCESS",
        payload: response.data.results,
      });
    });
};
