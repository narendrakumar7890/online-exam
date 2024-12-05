//import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Question from "./components/Question";
import Timer from "./components/Timer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5000/api/questions").then((response) => {
      dispatch({ type: "SET_QUESTIONS", payload: response.data });
    });
  }, [dispatch]);

  return (
    <div>
      <Timer />
      <Question />
    </div>
  );
}

export default App;
