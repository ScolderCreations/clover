"use strict";

import * as commands from "./commands.mjs";
import tokenizer from "./tokenizer.mjs";

import token from "./tokens.js";

const memory = {};

process.stdin.on('data', data => {
  const tokens = tokenizer(data.toString);
});