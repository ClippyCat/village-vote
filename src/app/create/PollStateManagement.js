"use client";
import React, { useState } from "react";

const PollStateManagement = ({ children }) => {
  const [pollData, setPollData] = useState({
    title: "",
    questions: [{type: "singleSelect", text: "option 1", options: [""]}],
  });

  const handleInputChange = (name, value) => {
    setPollData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuestionChange = (qIndex, text) => {
    const questions = [...pollData.questions];
    questions[qIndex].text = text;
    setPollData((prevData) => ({
      ...prevData,
      questions,
    }));
  };

  const handleQuestionTypeChange = (qIndex, type) => {
    const questions = [...pollData.questions];
    questions[qIndex].type = type;
    setPollData((prevData) => ({
      ...prevData,
      questions,
    }));
  };

  const handleOptionChange = (qIndex, oIndex, option) => {
    const questions = [...pollData.questions];
    questions[qIndex].options[oIndex] = option;
    setPollData((prevData) => ({
      ...prevData,
      questions,
    }));
  };

  const addQuestion = () => {
    const questions = [...pollData.questions, { text: "", options: [] }];
    setPollData((prevData) => ({
      ...prevData,
      questions,
    }));
  };

  const removeQuestion = (qIndex) => {
    if (qIndex > 0) {
      const questions = [...pollData.questions];
      questions.splice(qIndex, 1);
      setPollData((prevData) => ({
        ...prevData,
        questions,
      }));
    }
  };

  const addOption = (qIndex) => {
    const questions = [...pollData.questions];
    questions[qIndex].options.push();
    setPollData((prevData) => ({
      ...prevData,
      questions,
    }));
  };

  const removeOption = (qIndex, oIndex) => {
    if (oIndex >= 0) {
      const questions = [...pollData.questions];
      questions[qIndex].options.splice(oIndex, 1);
      setPollData((prevData) => ({
        ...prevData,
        questions,
      }));
    }
  };

  return (
    <div>
      {children({
        pollData,
        handleInputChange,
        handleQuestionChange,
        handleOptionChange,
        addQuestion,
        removeQuestion,
        addOption,
        removeOption,
      })}
    </div>
  );
};

export default PollStateManagement;
