"use client";
import React, { useState } from "react";

const OptionInput = ({ option, qIndex, oIndex, handleOptionChange, handleDateChange, handleStartTimeChange, handleEndTimeChange, handleTimezoneChange, removeOption }) => {
  return (
    <div>
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
      {/* Include other option input fields (startTime, endTime, timezone) */}
      {/* Add or remove options */}
      <button onClick={() => removeOption(qIndex, oIndex)}>Remove Option</button>
    </div>
  );
};

export default OptionInput;
