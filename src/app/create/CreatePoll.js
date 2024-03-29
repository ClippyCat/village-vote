"use client";
import React, { useState } from "react";
import CreatePollHeader from "./CreatePollHeader";
import QuestionInput from "./QuestionInput";
import OptionInput from "./OptionInput";
import PollStateManagement from "./PollStateManagement";

const CreatePoll = () => {
  return (
    <PollStateManagement>
      {({
        pollData,
        handleInputChange,
        handleQuestionChange,
        handleQuestionTypeChange,
        handleOptionChange,
        addQuestion,
        removeQuestion,
        addOption,
        removeOption,
      }) => (
        <div>
          <CreatePollHeader title={pollData.title} handleInputChange={handleInputChange} />

          {pollData.questions.map((question, qIndex) => (
            <div key={qIndex}>
              <QuestionInput
                question={question}
                qIndex={qIndex}
                handleQuestionChange={handleQuestionChange}
                handleQuestionTypeChange={handleQuestionTypeChange}
              />

              {question.options.map((option, oIndex) => (
                  <OptionInput
                    key={oIndex}
                    option={option}
                    qIndex={qIndex}
                    oIndex={oIndex}
                    handleOptionChange={handleOptionChange}
                    removeOption={removeOption}
                  />
                ))}

              <button onClick={() => addOption(qIndex)}>Add Option</button>
              {qIndex > 0 && (
                <button onClick={() => removeQuestion(qIndex)}>Remove Question</button>
              )}
            </div>
          ))}

          <button onClick={() => addQuestion()}>Add Question</button>
        </div>
      )}
    </PollStateManagement>
  );
};

export default CreatePoll;
