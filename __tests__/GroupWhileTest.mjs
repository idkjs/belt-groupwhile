// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as GroupWhile from "../src/GroupWhile.mjs";

var x = {
  hd: 1,
  tl: {
    hd: 2,
    tl: {
      hd: 3,
      tl: {
        hd: 4,
        tl: /* [] */0
      }
    }
  }
};

function f(i1, i2) {
  return Math.imul(i1, i2) % 2 === 0;
}

console.log(GroupWhile.groupWhile(x, f));

console.log(Belt_List.toArray(GroupWhile.groupWhile(x, f)));

export {
  x ,
  f ,
  
}
/*  Not a pure module */
