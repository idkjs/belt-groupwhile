let re = (sum, n) =>
  if (n == 0) {
    0;
  } else {
    n + ([@tailcall] sum)(n - 1);
  };
