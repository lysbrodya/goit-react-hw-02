import { Children, useState } from "react";
import "./App.css";

// const handleClick = (e) => {
//   setCount(count + 1);
// };
const Options = ({ children, onHandleClick }) => {
  return (
    <div>
      <button onClick={onHandleClick}> {children}</button>
    </div>
  );
};

const Feedback = ({ positive, total, good, neutral, bad }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive} %</p>
    </div>
  );
};
const Notification = () => {
  return <p>No feedback yet</p>;
};
export default function App() {
  const [states, setStates] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (key) => {
    setStates({ ...states, [key]: states[key] + 1 });
  };
  const onReset = () => {
    setStates({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = states.good + states.neutral + states.bad;
  const PositiveFeedback = Math.round(
    ((states.good + states.neutral) / totalFeedback) * 100
  );
  return (
    <>
      {" "}
      <div>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
      <Options good={states.good} onHandleClick={() => updateFeedback("good")}>
        Good
      </Options>
      <Options
        neutral={states.neutral}
        onHandleClick={() => updateFeedback("neutral")}
      >
        Neutral
      </Options>
      <Options bad={states.bad} onHandleClick={() => updateFeedback("bad")}>
        Bad
      </Options>
      {totalFeedback !== 0 && <Options onHandleClick={onReset}>Reset</Options>}
      {totalFeedback !== 0 ? (
        <Feedback
          good={states.good}
          neutral={states.neutral}
          bad={states.bad}
          total={totalFeedback}
          positive={PositiveFeedback}
        ></Feedback>
      ) : (
        <Notification />
      )}
    </>
  );
}
