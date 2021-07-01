type t<'a> = list<'a>

let rec dropWhile = (t, ~f) =>
  switch t {
  | list{} => list{}
  | list{x, ...rest} =>
    if f(x) {
      dropWhile(rest, ~f)
    } else {
      t
    }
  }

let takeWhile = (t, ~f) => {
  let rec takeWhileHelper = (acc, t) =>
    switch t {
    | list{} => Belt.List.reverse(acc)
    | list{x, ...rest} =>
      if f(x) {
        takeWhileHelper(list{x, ...acc}, rest)
      } else {
        Belt.List.reverse(acc)
      }
    }

  takeWhileHelper(list{}, t)
}

let span = (t, ~f) =>
  switch t {
  | list{} => (list{}, list{})
  | _ => (takeWhile(t, ~f), dropWhile(t, ~f))
  }

let groupWhile = (t, ~f) => {
  let rec groupWhileHelper = (t, ~f) =>
    switch t {
    | list{} => list{}
    | list{x, ...rest} =>
      let (ys, zs) = span(rest, ~f=f(x))
      list{list{x, ...ys}, ...groupWhileHelper(zs, ~f)}
    }

  groupWhileHelper(t, ~f)
}
let x = list{1, 2, 3, 4}
let f = (i1, i2) => mod(i1 * i2, 2) == 0
groupWhile(x, ~f)->Js.log
groupWhile(x, ~f)->Belt.List.toArray->Js.log
