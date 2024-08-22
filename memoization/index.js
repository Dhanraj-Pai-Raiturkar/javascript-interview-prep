function myMemo(fn) {
  const res = {};
  return async function (...args) {
    const argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = await fn(...args);
      return res[argsCache];
    } else {
      return res[argsCache];
    }
  };
}

const pause = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

const clumsy = async (num1, num2) => {
  await pause(2);
  return num1 * num2;
};

exports.name = "dhanraj";

console.log(this);

// console.time("first call");
// const response = await clumsy(2, 2);
// console.log(response);
// console.timeEnd("first call");

// console.time("second call");
// console.log(await clumsy(2, 2));
// console.timeEnd("second call");

// console.time("third call");
// console.log(await clumsy(2, 2));
// console.timeEnd("third call");

// console.log("=============================");

// const memoizedClumsy = myMemo(clumsy);

// console.time("first call");
// const responseMemo = await memoizedClumsy(2, 2);
// console.log(responseMemo);
// console.timeEnd("first call");

// console.time("second call");
// console.log(await memoizedClumsy(2, 2));
// console.timeEnd("second call");

// console.time("third call");
// console.log(await memoizedClumsy(2, 2));
// console.timeEnd("third call");
