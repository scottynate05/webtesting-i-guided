module.exports = {
  add,
  staticString,
};

// function add(a = 0, b = 0) {
  // return a && b ? a + b : 0;

  // if (a === b) {
  //   return a * 2;
  // } else {
  //   return a * b;
  // }
// }


// function add(...values) {
//   return values.reduce((a, b) => a + b, 0);
// }


function add(args) {
  const values = Array.isArray(args) ? args : Array.from(arguments);

  return values.reduce((a, b) => a + b, 0);
};

function staticString() {
  return 'This is a static string.';
};