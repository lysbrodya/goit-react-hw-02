import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notifications/Notification";
import Feedback from "../Feedback/Feedback";
import { useEffect, useState } from "react";

export default function App() {
  const [states, setStates] = useState(() => {
    const savedObject = window.localStorage.getItem("saved-feedback");
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    window.localStorage.setItem(
      "saved-feedback",
      JSON.stringify({ ...states })
    );
  }, [states]);
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
      <Description />
      <Options
        good={states.good}
        neutral={states.neutral}
        bad={states.bad}
        total={totalFeedback}
        onHandleClick={updateFeedback}
        onReset={onReset}
      ></Options>
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
