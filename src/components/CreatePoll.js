"use client";
import { useState } from "react";
import ExportJSON from './ExportJSON';

const CreatePoll = () => {
  const [pollData, setPollData] = useState({
    title: '',
    questions: [{ text: '', options: ['', ''] }],
    pollType: 'singleSelect',
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
      questions[qIndex].options[oIndex] = '';
      setPollData((prevData) => ({
        ...prevData,
        questions,
      }));
    }
  };

  const addQuestion = () => {
    const questions = [...pollData.questions, { text: '', options: ['', ''] }];
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
      <h2>Create new poll</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={pollData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
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
          {question.options.map((option, oIndex) => (
            <div key={oIndex}>
              <label>
                Option {oIndex + 1}:
                <input
                  type="text"
                  name={`option-${qIndex}-${oIndex}`}
                  value={option}
                  onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                />
              </label>
              <button onClick={() => removeOption(qIndex, oIndex)}>Remove Option</button>
            </div>
          ))}
          <button onClick={() => addOption(qIndex)}>Add Option</button>
          {qIndex > 0 && (
            <button onClick={() => removeQuestion(qIndex)}>Remove Question</button>
          )}
        </div>
      ))}
      <button onClick={addQuestion}>Add Question</button>
      <label>
        Poll Type:
        <select
          name="pollType"
          value={pollData.pollType}
          onChange={(e) => handleInputChange('pollType', e.target.value)}
        >
          <option value="singleSelect">Single Select</option>
          <option value="multiSelect">Multi Select</option>
          <option value="ranking">Ranking</option>
        </select>
      </label>
      <ExportJSON data={pollData} />
    </div>
  );
};

export default CreatePoll;
