"use client";
import React, { useState } from "react";
import ExportJSON from "./ExportJSON";

const CreatePoll = () => {
  const [pollData, setPollData] = useState({
    title: "",
    questions: [{ text: "", options: ["", ""] }],
    questionTypes: ["singleSelect"],
    calendar: false,
  });

  const handleInputChange = (name, value) => {
    setPollData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuestionChange = (index, text) => {
    const questions = [...pollData.questions];
    questions[index].text = text;
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

  const addOption = (qIndex) => {
    const questions = [...pollData.questions];
    questions[qIndex].options.push('');
    setPollData((prevData) => ({
      ...prevData,
      questions,
    }));
  };

  const addOptionCal = (qIndex) => {
    const questions = [...pollData.questions];
    const newOption = {
      date: "",
      startTime: "",
      endTime: "",
      timezone: "",
    };
    questions[qIndex].options.push(newOption);
    setPollData((prevData) => ({
      ...prevData,
      questions,
    }));
  };

const handleAddOption = (qIndex) => {
  const addFunction = pollData.calendar ? addOptionCal : addOption;
  addFunction(qIndex);
};

  const removeOption = (qIndex, oIndex) => {
    if (oIndex >= 2) {
      const questions = [...pollData.questions];
      questions[qIndex].options.splice(oIndex, 1);
      setPollData((prevData) => ({
        ...prevData,
        questions,
      }));
    } else if (oIndex >= 0) {
      const questions = [...pollData.questions];
      questions[qIndex].options[oIndex] = "";
      setPollData((prevData) => ({
        ...prevData,
        questions,
      }));
    }
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
    const questions = [...pollData.questions, { text: "", options: ["", ""] }];
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

  return (
    <div>
      <h2>Create a new poll</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={pollData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          required
        />
      </label>
      {pollData.questions.map((question, qIndex) => (
        <div key={qIndex}>
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
          {pollData.calendar && (
            <>
              {question.options.map((option, oIndex) => (
                <div key={oIndex}>
                  <label>
                    Option {oIndex + 1} Date:
                    <input
                      type="date"
                      name={`date-${qIndex}-${oIndex}`}
                      value={option.date}
                      onChange={(e) => handleDateChange(qIndex, oIndex, e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    Start Time:
                    <input
                      type="time"
                      name={`startTime-${qIndex}-${oIndex}`}
                      value={option.startTime}
                      onChange={(e) => handleStartTimeChange(qIndex, oIndex, e.target.value)}
                    />
                  </label>
                  <label>
                    End Time:
                    <input
                      type="time"
                      name={`endTime-${qIndex}-${oIndex}`}
                      value={option.endTime}
                      onChange={(e) => handleEndTimeChange(qIndex, oIndex, e.target.value)}
                    />
                  </label>
                  <label>
                    Timezone:
                    <input
                      type="text"
                      name={`timezone-${qIndex}-${oIndex}`}
                      value={option.timezone}
                      onChange={(e) => handleTimezoneChange(qIndex, oIndex, e.target.value)}
                    />
                  </label>
                  <button onClick={() => removeOption(qIndex, oIndex)}>Remove Option</button>
                </div>
              ))}
            </>
          )}
          <button onClick={() => handleAddOption(qIndex)}>Add Option</button>
          {qIndex > 0 && (
            <button onClick={() => removeQuestion(qIndex)}>Remove Question</button>
          )}
          <label>
            Question Type:
            <select
              name={`questionType-${qIndex}`}
              value={pollData.questionTypes[qIndex]}
              onChange={(e) => {
                const questionTypes = [...pollData.questionTypes];
                questionTypes[qIndex] = e.target.value;
                setPollData((prevData) => ({
                  ...prevData,
                  questionTypes,
                }));
              }}
            >
              <option value="singleSelect">Single Select</option>
              <option value="multiSelect">Multi Select</option>
              <option value="rank">rank</option>
            </select>
          </label>
        </div>
      ))}
      <label>
        Calendar:
        <input
          type="checkbox"
          name="calendar"
          checked={pollData.calendar}
          onChange={(e) => handleInputChange("calendar", e.target.checked)}
        />
      </label>
      <button onClick={addQuestion}>Add Question</button>
      <ExportJSON data={pollData} />
    </div>
  );
};

export default CreatePoll;
