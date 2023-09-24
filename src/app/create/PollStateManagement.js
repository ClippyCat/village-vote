"use client";
import React, { useState } from "react";

const PollStateManagement = ({ children }) => {
  const [pollData, setPollData] = useState({
    title: "",
    questions: [{ text: "", options: [{ date: "", startTime: "", endTime: "", timezone: "" }] }],
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

  const handleCalendarChange = (qIndex, isChecked) => {
    const questions = [...pollData.questions];
    questions[qIndex].calendar = isChecked;
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

  const handleDateChange = (qIndex, oIndex, date) => {
    const questions = [...pollData.questions];
    questions[qIndex].options[oIndex].date = date;
    setPollData((prevData) => ({
      ...prevData,
      questions,
    }));
  };

  const handleStartTimeChange = (qIndex, oIndex, startTime) => {
    const questions = [...pollData.questions];
    questions[qIndex].options[oIndex].startTime = startTime;
    setPollData((prevData) => ({
      ...prevData,
      questions,
    }));
  };

  const handleEndTimeChange = (qIndex, oIndex, endTime) => {
    const questions = [...pollData.questions];
    questions[qIndex].options[oIndex].endTime = endTime;
    setPollData((prevData) => ({
      ...prevData,
      questions,
    }));
  };

  const handleTimezoneChange = (qIndex, oIndex, timezone) => {
    const questions = [...pollData.questions];
    questions[qIndex].options[oIndex].timezone = timezone;
    setPollData((prevData) => ({
      ...prevData,
      questions,
    }));
  };

  const addQuestion = () => {
    const questions = [...pollData.questions, { text: "", options: [{ date: "", startTime: "", endTime: "", timezone: "" }] }];
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

  const addOption = (qIndex, date) => {
    const questions = [...pollData.questions];
    questions[qIndex].options.push({ date: "", time: "", length: "", startTime: "", endTime: "", timezone: "", calendar: date });
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
        handleQuestionTypeChange,
        handleCalendarChange,
        handleOptionChange,
        handleDateChange,
        handleStartTimeChange,
        handleEndTimeChange,
        handleTimezoneChange,
        addQuestion,
        removeQuestion,
        addOption,
        removeOption,
      })}
    </div>
  );
};

export default PollStateManagement;
