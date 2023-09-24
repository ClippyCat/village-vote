"use client";
import React, { useState } from "react";

const QuestionInput = ({ question, qIndex, handleQuestionChange, handleQuestionTypeChange, handleCalendarChange }) => {
  return (
    <div>
      <h2>Question {qIndex + 1}</h2>
      <label>
        Question {qIndex + 1}:
        <input
          type="text"
          name={`question-${qIndex}`}
          value={question.text}
          onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
          required
        />
      </label>
      <label>
        Question Type:
        <select
          name={`questionType-${qIndex}`}
          value={question.type}
          onChange={(e) => handleQuestionTypeChange(qIndex, e.target.value)}
        >
          <option value="singleSelect">Single Select</option>
          <option value="multiSelect">Multi Select</option>
          <option value="rank">Rank</option>
        </select>
      </label>
    </div>
  );
};

export default QuestionInput;
