export default function Options({ onHandleClick, onReset, total }) {
  return (
    <div>
      <button onClick={() => onHandleClick("good")}>Good</button>
      <button onClick={() => onHandleClick("neutral")}>Neutral</button>
      <button onClick={() => onHandleClick("bad")}>Bad</button>
      {total !== 0 && <button onClick={() => onReset()}>Reset</button>}
    </div>
  );
}
