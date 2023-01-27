import React from "react";
import QuestionCard from "./QuestionCard";
import Data from "../data";

export default function Card() {
  const quest = Data.map((item) => {
    return <QuestionCard key={item.id} item={item} />;
  });

  return (
    <div className="main-card">
      <h2 className="header">Question and Answer About Login</h2>
      <div>
      {quest}

      </div>
    </div>
  );
}
