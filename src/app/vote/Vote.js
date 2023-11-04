"use client";
import React, { useState } from "react";

const data = {
  title: "test",
  questions: [
    {
      text: "q1",
      options: ["a1", "a2", "a3"],
      type: "multiSelect",
    },
    {
      text: "q2",
      options: ["b1", "b2"],
      type: "singleSelect",
    },
  ]
};

const Vote = () => {
  return (
    <div>
      <h1>{data.title}</h1>
      {data.questions.map((question, qIndex) => (
        <div key={qIndex}>
          <h2>{question.text}</h2>
          {question.type === "singleSelect" ? (
            <SingleSelectOptions qIndex={qIndex} options={question.options} />
          ) : question.type === "multiSelect" ? (
            <MultiSelectOptions qIndex={qIndex} options={question.options} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

const SingleSelectOptions = ({ qIndex, options }) => {
  return (
    <div>
      {options.map((option, oIndex) => (
        <label key={oIndex}>
          <input type="radio" name={`q${qIndex}`} value={option} />
        </label>
      ))}
    </div>
  );
};

const MultiSelectOptions = ({ qIndex, options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <input type="checkbox" name={`q${qIndex}`} value={option} />
        </label>
      ))}
    </div>
  );
};

export default Vote;
