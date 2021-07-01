// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";

function dropWhile(_t, f) {
  while(true) {
    var t = _t;
    if (!t) {
      return /* [] */0;
    }
    if (!Curry._1(f, t.hd)) {
      return t;
    }
    _t = t.tl;
    continue ;
  };
}

function takeWhile(t, f) {
  var _acc = /* [] */0;
  var _t = t;
  while(true) {
    var t$1 = _t;
    var acc = _acc;
    if (!t$1) {
      return Belt_List.reverse(acc);
    }
    var x = t$1.hd;
    if (!Curry._1(f, x)) {
      return Belt_List.reverse(acc);
    }
    _t = t$1.tl;
    _acc = {
      hd: x,
      tl: acc
    };
    continue ;
  };
}

function span(t, f) {
  if (t) {
    return [
            takeWhile(t, f),
            dropWhile(t, f)
          ];
  } else {
    return [
            /* [] */0,
            /* [] */0
          ];
  }
}

function groupWhile(t, f) {
  var takeWhileHelper = function (t, f) {
    if (!t) {
      return /* [] */0;
    }
    var x = t.hd;
    var match = span(t.tl, Curry._1(f, x));
    return {
            hd: {
              hd: x,
              tl: match[0]
            },
            tl: takeWhileHelper(match[1], f)
          };
  };
  return takeWhileHelper(t, f);
}

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

console.log(groupWhile(x, f));

console.log(Belt_List.toArray(groupWhile(x, f)));

export {
  dropWhile ,
  takeWhile ,
  span ,
  groupWhile ,
  x ,
  f ,
  
}
/*  Not a pure module */
