//your JS code here. If required.
const student = {
  name: 'John Doe'
};

// Add a 'getKeys()' method to the Object prototype
Object.prototype.getKeys = function() {
  // Use Object.keys() to get an array of all the keys in the object
  return Object.keys(this);
};