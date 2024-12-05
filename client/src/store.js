import { createStore } from "redux";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  timer: 120,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        timer: 120,
      };
    case "DECREMENT_TIMER":
      return { ...state, timer: state.timer - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
