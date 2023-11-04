"use client";
import React, { useState } from "react";

const OptionInput = ({ option, qIndex, oIndex, handleOptionChange, removeOption }) => {

    return (
      <div>
        <h3>Option {oIndex + 1}</h3>
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
        <button onClick={() => removeOption(qIndex, oIndex)}>Remove Option</button>
      </div>
    );
  }


export default OptionInput;
