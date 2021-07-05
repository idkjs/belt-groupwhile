

# WIP
This is a package to show how to package high quality ReScript libraries for JS users


# benchmark


```
node src/demo.mjs
```

One sample output:

```
rescript-repack-demo$node src/demo.mjs
Execution time for benchMori (hr): 154.069475ms
Execution time for benchImmutable (hr): 118.909703ms
Execution time for benchBeltMap (hr): 36.310083ms
```

# Tail Calls Test in Reason Syntax

Does not seem to work in `.res` syntax, maybe because of `Belt` module being used. Or it does but not if there are two annotated files in a directory or something else. 

```
ocamlc -annot -o GroupWhileTailCalls -pp "refmt -p ml" -impl GroupWhileTailCalls.re
grep call -A1 src/GroupWhileTailCalls.annot
```
