function fib(num) {
  let response = [0, 1];
  if (num <= 1) response;
  for (let i = 2; i < num; i++) {
    response.push(response[i - 1] + response[i - 2]);
  }
  return response;
}

console.log(fib(5));
