"use strict";

import * as tokentofunc from "./tokentofunc.mjs"
import tokenizer from "./tokenizer.mjs";

const memory = {};

process.stdin.on('data', data => {
  const tokens = tokenizer(data.toString);
});