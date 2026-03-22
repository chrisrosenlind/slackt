import { AppState } from "./types";
import { render } from "./render";
import { Client } from "./client";
import env from "dotenv";

env.config();

const token = process.env?.SLACK_TOKEN ?? "";
const url = process.env?.APIURL ?? "";

const state: AppState = {
  user: undefined,
  channel: undefined,
};

const client = new Client({ token, url });
