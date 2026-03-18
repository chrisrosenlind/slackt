import { AppState } from "./types";
import { render } from "./render";
import { Client } from "./client";
import env from "dotenv";

env.config();

const state: AppState = {
  user: undefined,
  channel: undefined,
};

const client = new Client();

console.log("Running");
