// lib/quickekyc.ts
import axios from "axios";

export const quickeKyc = axios.create({
  baseURL: process.env.QUICKEKYC_BASE_URL, // sandbox.quickekyc.com
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 15000
});