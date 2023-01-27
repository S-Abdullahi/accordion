import React, { useState } from "react";
export default function QuestionCard(props) {
  const { id, title, info } = props.item;
  const [show, setShow] = useState(false);

  function toggle() {
    setShow((prev) => !prev);
  }

  return (
    <div className="question-card">
      <div className="inner-card">
        <h3 className="question">{title}</h3>
        <button className="btn" onClick={toggle}>
          {show ? '-' : '+'}
        </button>
      </div>
      <p className="answer">{show ? info : ""}</p>
    </div>
  );
}
