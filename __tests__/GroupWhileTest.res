open GroupWhile

let x = list{1, 2, 3, 4}
let f = (i1, i2) => mod(i1 * i2, 2) == 0
groupWhile(x, ~f)->Js.log
groupWhile(x, ~f)->Belt.List.toArray->Js.log


// let expected = [ { hd: 1, tl: { hd: 2, tl: 0 } }, { hd: 3, tl: { hd: 4, tl: 0 } } ]
