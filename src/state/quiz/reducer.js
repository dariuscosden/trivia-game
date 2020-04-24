const initialState = {
  currentQuestion: 0,
  questions: [],
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUESTIONS_SUCCESS":
      return Object.assign({}, state, {
        questions: action.payload,
      });

    default:
      return initialState;
  }
};

export default quizReducer;
