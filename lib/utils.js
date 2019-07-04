const getRandom = items => {
  return items[Math.floor(Math.random() * items.length)];
};

const shuffle = array => {
  return [...array].sort(() => Math.random() - 0.5);
};

const neverend = function*(arr) {
  for (let i = 0; true; i = (i + 1) % arr.length) {
    yield arr[i];
  }
};

// Возвращает перестановки заданного множества элементов.
// Кредитс: https://github.com/trekhleb/javascript-algorithms
const getPermutations = elements => {
  if (elements.length === 1) {
    return [elements];
  }

  const permutations = [];

  const smallerPermutations = getPermutations(elements.slice(1));

  const firstElement = elements[0];

  for (const smallerPermutation of smallerPermutations) {
    for (let i = 0; i <= smallerPermutation.length; i++) {
      const permutationPrefix = smallerPermutation.slice(0, i);
      const permutationSuffix = smallerPermutation.slice(i);
      permutations.push([
        ...permutationPrefix,
        firstElement,
        ...permutationSuffix
      ]);
    }
  }

  return permutations;
};

/**
 * Run the functions in the tasks array in series, each one running once the previous function has completed.
 * If any functions in the series pass an error to its callback, no more functions are run,
 * and callback is immediately called with the value of the error. Otherwise, callback receives an array of results
 * when tasks have completed.
 * Taken from https://github.com/feross/run-series
 *
 * @params {Array} tasks An array containing functions to run, each function is passed a callback(err, result) which it must call on completion with an error err (which can be null) and an optional result value.
 * @params {Function} callback(err, results) - An optional callback to run once all the functions have completed. This function gets a results array containing all the result arguments passed to the task callbacks.
 */

// import process from 'process';

function series(tasks, cb) {
  const results = [];
  let current = 0;
  let isSync = true;

  function done(err) {
    function end() {
      if (cb) cb(err, results);
    }
    if (isSync) process.nextTick(end);
    else end();
  }

  function each(err, result) {
    results.push(result);
    if (++current >= tasks.length || err) done(err);
    else tasks[current](each);
  }

  if (tasks.length > 0) tasks[0](each);
  else done(null);

  isSync = false;
}

const shallowEqual = (objA, objB) => {
  if (objA === objB) {
    return true;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  const hasOwn = Object.prototype.hasOwnProperty;
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
};

/**
 * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
 * Taken from https://github.com/component/throttle v1.0.0
 *
 * @param {Function} func Function to wrap.
 * @param {Number} wait Number of milliseconds that must elapse between `func` invocations.
 * @return {Function} A new function that wraps the `func` function passed in.
 */

const throttle = (func, wait) => {
  let ctx;
  let args;
  let rtn;
  let timeoutID;
  let last = 0;

  function call() {
    timeoutID = 0;
    last = +new Date();
    rtn = func.apply(ctx, args);
    ctx = null;
    args = null;
  }

  return function throttled() {
    ctx = this;
    args = arguments;
    const delta = new Date() - last;
    if (!timeoutID) {
      if (delta >= wait) call();
      else timeoutID = setTimeout(call, wait - delta);
    }
    return rtn;
  };
};

let uid = 0;

const uniqueId = () => {
  return uid++;
};

const noop = () => {};

/**
 * Repeatedly call fn, while test returns true. Calls callback when stopped, or an error occurs.
 *
 * @param {Function} test Synchronous truth test to perform before each execution of fn.
 * @param {Function} fn A function which is called each time test passes. The function is passed a callback(err), which must be called once it has completed with an optional err argument.
 * @param {Function} callback A callback which is called after the test fails and repeated execution of fn has stopped.
 */

const whilst = (test, iterator, callback = noop) => {
  if (test()) {
    iterator(function next(err, ...args) {
      if (err) {
        callback(err);
      } else if (test.apply(this, args)) {
        iterator(next);
      } else {
        callback(null);
      }
    });
  } else {
    callback(null);
  }
};

module.exports = {
  getRandom,
  shuffle,
  neverend,
  getPermutations,
  innerWidth,
  innerHeight,

  series
};
