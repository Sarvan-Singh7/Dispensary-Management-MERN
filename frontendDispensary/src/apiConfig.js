import axios from "axios";

const apiBaseUrl =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:4000" : undefined);

if (!apiBaseUrl) {
  throw new Error("VITE_API_URL must be set to the deployed backend URL.");
}

axios.defaults.baseURL = apiBaseUrl.replace(/\/+$/, "");
