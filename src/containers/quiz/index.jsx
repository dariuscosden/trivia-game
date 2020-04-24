import React, { useEffect } from "react";

// External Dependencies
//
import { connect } from "react-redux";

// Internal dependencies
//
import { fetchQuestions } from "../../state/quiz/actions";

const Quiz = ({ quiz, fetchQuestions }) => {
  console.log(quiz.questions);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return <div>Quiz</div>;
};

const mapStateToProps = (state) => ({
  quiz: state.quizReducer,
});

export default connect(mapStateToProps, { fetchQuestions })(Quiz);
