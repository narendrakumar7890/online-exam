import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Timer = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);

  useEffect(() => {
    if (timer === 0) {
      dispatch({ type: "NEXT_QUESTION" });
      return;
    }
    const interval = setInterval(() => {
      dispatch({ type: "DECREMENT_TIMER" });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, dispatch]);

  return <div>Time Remaining: {timer}s</div>;
};

export default Timer;
