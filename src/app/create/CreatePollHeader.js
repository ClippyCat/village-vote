"use client";
import React, { useState } from "react";

const CreatePollHeader = ({ title, handleInputChange }) => {
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
    </div>
  );
};

export default CreatePollHeader;
