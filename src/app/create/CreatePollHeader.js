"use client";
import React, { useState } from "react";

const CreatePollHeader = ({ title, handleInputChange, addQuestion }) => {
  return (
    <div>
      <h2>Create a new poll</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          required
        />
      </label>
      <button onClick={addQuestion}>Add Question</button>
    </div>
  );
};

export default CreatePollHeader;
