import { AppState } from "./types";
import { render } from "./render";
import env from "dotenv";

env.config();

const state: AppState = {
  user: undefined,
  channel: undefined,
};

const client = new WebSocket(process.env.URL ?? "");

console.log("Running");
