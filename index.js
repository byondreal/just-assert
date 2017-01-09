function assert(condition, message) {
  if (!condition) {
    console.trace(message);
    throw new Error(message);
  }
}
assert.not = function(condition, message) {
  assert(!condition, message);
}
module.exports = assert;

