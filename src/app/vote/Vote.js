"use client";
import React, { useState } from "react";

const data = {
  title: "test",
  questions: [
    {
      text: "q1",
      options: ["a1", "a2"],
      type: "singleSelect",
    },
    {
      text: "q2",
      options: [
        {
          date: "2023-10-25",
          time: "00:00",
          length: "30",
          timezone: "America/Edmonton",
          calendar: true,
        },
        {
          date: "2024-02-29",
          time: "18:09",
          length: "420",
          timezone: "America/Edmonton",
          calendar: true,
        },
      ],
      type: "singleSelect",
    },
    {
      text: "q3",
      options: ["a1", "a2"],
      type: "multiSelect",
    },
    {
      text: "q4",
      options: [
        {
          date: "2030-11-11",
          time: "23:00",
          length: "55",
          timezone: "America/Edmonton",
          calendar: true,
        },
        {
          date: "2024-02-29",
          time: "18:09",
          length: "420",
          timezone: "America/Edmonton",
          calendar: true,
        },
      ],
      type: "multiSelect",
    },
  ],
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
          {typeof option === "object"
            ? `${option.date} ${option.time}`
            : option}
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
          {typeof option === "object"
            ? `${option.date} ${option.time}`
            : option}
        </label>
      ))}
    </div>
  );
};

export default Vote;
