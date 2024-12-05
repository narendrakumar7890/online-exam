import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Question = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex } = useSelector((state) => state);

  const question = questions[currentQuestionIndex];

  const handleNext = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  if (!question) {
    return <div>Test Complete! Thank you for participating.</div>;
  }

  return (
    <div>
      <h3>Question {currentQuestionIndex + 1}</h3>
      <p>{question.question}</p>
      {question.options.map((option, index) => (
        <button key={index}>{option}</button>
      ))}
      <br />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Question;
