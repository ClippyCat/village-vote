"use client";
import React, { useState } from "react";

const timezones = Intl.supportedValuesOf("timeZone");
const OptionInput = ({ option, qIndex, oIndex, handleOptionChange, handleDateChange, handleTimeChange, handleLengthChange, handleTimezoneChange, removeOption }) => {
  if (option.calendar) {
    return (
      <div>
        <h4>Option {oIndex + 1}</h4>
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
          Time:
          <input
            type="time"
            name={`time-${qIndex}-${oIndex}`}
            value={option.time}
            onChange={(e) => handleTimeChange(qIndex, oIndex, e.target.value)}
          />
        </label>
        <label>
          Length:
          <input
            type="number"
            name={`length-${qIndex}-${oIndex}`}
            value={option.length}
            onChange={(e) => handleLengthChange(qIndex, oIndex, e.target.value)}
          />
        </label>
        <label>
          Timezone:
          <select
            name={`timezone-${qIndex}-${oIndex}`}
            value={option.timezone}
            onChange={(e) => handleTimezoneChange(qIndex, oIndex, e.target.value)}
          >
            {timezones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </label>
        <button onClick={() => removeOption(qIndex, oIndex)}>Remove Option</button>
      </div>
    );
  } else {
    return (
      <div>
        <h4>Option {oIndex + 1}</h4>
        <label>
          Option {oIndex + 1}:
          <input
            type="text"
            name={`option-${qIndex}-${oIndex}`}
            value={option.value}
            onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
            required
          />
        </label>
        {/* Include other option input fields (startTime, endTime, timezone) */}
        {/* Add or remove options */}
        <button onClick={() => removeOption(qIndex, oIndex)}>Remove Option</button>
      </div>
    );
  }
};

export default OptionInput;
