let \"|>" = (x, f) => f(x)

let dbl = x => x * 2

let sqr = x => x * x

let dbl_sqr_list = lst => lst |> List.map(dbl) |> List.map(sqr)

let string_of_list = (pr, lst) => "[" ++ ((lst |> List.map(pr) |> String.concat(", ")) ++ "]")

list{1, 2, 3, 4} |> dbl_sqr_list |> string_of_list(string_of_int) |> print_endline

let l = List.map(n => n + 1, list{1, 2, 3})

let l2 = dbl_sqr_list(list{1, 5, 2})
