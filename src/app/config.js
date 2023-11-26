"use client";

const LOCAL_URL = "http://127.0.0.1:5000";
const PROD_URL = "https://api.villagevote.clippycat.ca";
const BASE_URL = (typeof window !== "undefined" && window.location.protocol) === "https:" ? PROD_URL : LOCAL_URL;

export default BASE_URL;
