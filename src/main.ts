import { AppState } from "./types";
import { render } from "./render";
import { Client } from "./client";
import env from "dotenv";

env.config();

const SLACK_TOKEN = process.env?.SLACK_TOKEN ?? "";
const API_URL = process.env?.APIURL ?? "";

const state: AppState = {
  user: undefined,
  channel: undefined,
};

const client = new Client({ token: SLACK_TOKEN, url: API_URL });
