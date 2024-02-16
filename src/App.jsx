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

const Feedback = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p></p>
      <p></p>
    </div>
  );
};

export default function App() {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [states, setStates] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (key) => {
    setStates({ ...states, [key]: states[key] + 1 });
  };
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
      <Feedback
        good={states.good}
        neutral={states.neutral}
        bad={states.bad}
      ></Feedback>
    </>
  );
}
