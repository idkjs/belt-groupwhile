// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";

function re(sum, n) {
  if (n === 0) {
    return 0;
  } else {
    return n + Curry._1(sum, n - 1 | 0) | 0;
  }
}

export {
  re ,
  
}
/* No side effect */
