"use client";
import React, { useState } from "react";
import Head from 'next/head';
import CreatePoll from './CreatePoll';

const SubmitPoll = () => {

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: formData,
			});
		} catch (error) {
			console.error('Error:', error);
		}
	};
};

export default SubmitPoll;
