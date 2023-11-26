"use client";
import React, { useState } from "react";
import Head from 'next/head';
import CreatePoll from './CreatePoll';

const SubmitPoll = () => {
	const [formData, setFormData] = useState({});
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('/db/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
		} catch (error) {
			console.error('Error:', error);
		}
	};
};

export default SubmitPoll;
