"use client";
import React, { useState } from "react";
import CreatePollHeader from "./CreatePollHeader";
import QuestionInput from "./QuestionInput";
import OptionInput from "./OptionInput";
import ExportJSON from "./ExportJSON";
import PollStateManagement from "./PollStateManagement";

const CreatePoll = () => {
  return (
    <PollStateManagement>
      {({
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
      }) => (
        <div>
          <CreatePollHeader title={pollData.title} handleInputChange={handleInputChange} addQuestion={addQuestion} />

          {pollData.questions.map((question, qIndex) => (
            <div key={qIndex}>
              <QuestionInput
                question={question}
                qIndex={qIndex}
                handleQuestionChange={handleQuestionChange}
                handleQuestionTypeChange={handleQuestionTypeChange}
                handleCalendarChange={handleCalendarChange}
              />

              {question.options.map((option, oIndex) => (
                  <OptionInput
                    key={oIndex}
                    option={option}
                    qIndex={qIndex}
                    oIndex={oIndex}
                    handleOptionChange={handleOptionChange}
                    handleDateChange={handleDateChange}
                    handleStartTimeChange={handleStartTimeChange}
                    handleEndTimeChange={handleEndTimeChange}
                    handleTimezoneChange={handleTimezoneChange}
                    removeOption={removeOption}
                  />
                ))}

              <button onClick={() => addOption(qIndex, false)}>Add Option</button>
              <button onClick={() => addOption(qIndex, true)}>Add Date Option</button>
              {qIndex > 0 && (
                <button onClick={() => removeQuestion(qIndex)}>Remove Question</button>
              )}
            </div>
          ))}

          <ExportJSON data={pollData} />
        </div>
      )}
    </PollStateManagement>
  );
};

export default CreatePoll;
