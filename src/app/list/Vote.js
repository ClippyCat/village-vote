"use client";
import React, { useState, useEffect } from 'react';

const Vote = () => {
  const [data, setData] = useState({ title: '', questions: [] });

  useEffect(() => {
    fetch('http://127.0.0.1:5000/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

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
          ) : question.type === "rank" ? (
            <Rank qIndex={qIndex} options={question.options} />
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
          {option}
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
          {option}
        </label>
      ))}
    </div>
  );
};

const Rank = ({ qIndex, options }) => {
  const [rankings, setRankings] = useState({});

  const handleRankChange = (option, value) => {
    const updatedRankings = { ...rankings, [option]: value };
    setRankings(updatedRankings);
  };

  const handleSelectChange = (option, event) => {
    const newValue = parseInt(event.target.value);
    const currentRankings = { ...rankings };

    if (!Object.values(currentRankings).includes(newValue)) {
      handleRankChange(option, newValue);
    } else {
      handleRankChange(option, "");
    }
  };

  const renderOptions = () =>
    options.map((option, index) => (
      <label key={option}>
        {option}:
        <select
          name={`q${qIndex}-${index}`} // Unique name for each select
          value={rankings[option] || ""}
          onChange={(e) => handleSelectChange(option, e)}
        >

          {options.map((_, idx) => (
            <option key={idx} value={idx}>
              {idx + 1}
            </option>
          ))}
        </select>
      </label>
    ));

  return <div>{renderOptions()}</div>;
};

export default Vote;
