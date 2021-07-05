type nonrec t('a) = list('a);

let rec dropWhile = (t, ~f) =>
  switch (t) {
  | [] => []
  | [x, ...rest] =>
    if (f(x)) {
      ([@tailcall] dropWhile)(rest, ~f);
    } else {
      t;
    }
  };

let takeWhile = (t, ~f) =>
  [@ns.braces]
  {
    let rec takeWhileHelper = (acc, t) =>
      switch (t) {
      | [] => Belt.List.reverse(acc)
      | [x, ...rest] =>
        if (f(x)) {
          ([@tailcall] takeWhileHelper)([x, ...acc], rest);
        } else {
          Belt.List.reverse(acc);
        }
      };

    takeWhileHelper([], t);
  };

let span = (t, ~f) =>
  switch (t) {
  | [] => ([], [])
  | _ => (
      ([@tailcall] takeWhile)(t, ~f),
      ([@tailcall] dropWhile)(t, ~f),
    )
  };

let groupWhile = (t, ~f) =>
  [@ns.braces]
  {
    let rec groupWhileHelper = (t, ~f) =>
      switch (t) {
      | [] => []
      | [x, ...rest] =>
        let (ys, zs) = span(rest, ~f=f(x));
        [[x, ...ys], ...groupWhileHelper(zs, ~f)];
      };

    ([@tailcall] groupWhileHelper)(t, ~f);
  };
