/*
  async_js.js
  ---------------------------------------------
  Complete Guide to Asynchronous JavaScript
  ---------------------------------------------

  Topics covered:
  1. What is asynchronous JS?
  2. Call stack & event loop
  3. setTimeout & callbacks
  4. Callback hell
  5. Promises
  6. Promise chaining
  7. async/await
  8. Error handling
  9. Parallel execution (Promise.all)
*/

/*************************************************
 * 1. What is Asynchronous JavaScript?
 *************************************************/

// JavaScript is single-threaded, but async allows
// non-blocking behavior for tasks like API calls,
// timers, file operations, etc.

console.log("Start");

setTimeout(() => {
  console.log("Async task done");
}, 1000);

console.log("End");

// Output:
// Start
// End
// Async task done

/*************************************************
 * 2. Call Stack & Event Loop (concept)
 *************************************************/

// JS executes synchronous code in call stack
// Async tasks go to Web APIs and callback queue
// Event loop moves them back when stack is free

/*************************************************
 * 3. Callbacks
 *************************************************/

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});

/*************************************************
 * 4. Callback Hell
 *************************************************/

// Nested callbacks become hard to read

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 500);
  }, 500);
}, 500);

/*************************************************
 * 5. Promises
 *************************************************/

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) resolve("Promise resolved");
    else reject("Promise rejected");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

/*************************************************
 * 6. Promise Chaining
 *************************************************/

function step1() {
  return new Promise((resolve) => setTimeout(() => resolve("Step 1"), 500));
}

function step2() {
  return new Promise((resolve) => setTimeout(() => resolve("Step 2"), 500));
}

step1()
  .then((result) => {
    console.log(result);
    return step2();
  })
  .then((result) => {
    console.log(result);
  });

/*************************************************
 * 7. async / await
 *************************************************/

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("A");

  await wait(1000);
  console.log("B");

  await wait(1000);
  console.log("C");
}

run();

/*************************************************
 * 8. Error Handling
 *************************************************/

async function fetchData() {
  try {
    let success = false;

    if (!success) throw new Error("Failed to fetch data");

    return "Data";
  } catch (err) {
    console.log("Error:", err.message);
  }
}

fetchData();

/*************************************************
 * 9. Parallel Execution
 *************************************************/

function task1() {
  return new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000));
}

function task2() {
  return new Promise((resolve) => setTimeout(() => resolve("Task 2"), 1000));
}

async function runParallel() {
  const [t1, t2] = await Promise.all([task1(), task2()]);

  console.log(t1);
  console.log(t2);
}

runParallel();

/*************************************************
 * KEY TAKEAWAYS
 *************************************************/

/*
- JS is single-threaded but async avoids blocking
- Callbacks were first approach
- Promises improved readability
- async/await makes async code look synchronous
- Promise.all runs tasks in parallel
- Event loop handles async execution
*/
