
function Checks() {}

Checks.prototype = {
  validate: function(parameters, checks) {
    let keys = Object.keys(parameters);
    let checks = Object.keys(checks);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let prop = parameters[key];
      if (checks.indexOf(key) !== -1) {
        let test = checks[key];
        switch (test) {
          case 'array':
            if (!Array.isArray(prop)) {
              throw new Error(key + ' is NOT an Array');
            }
            break;
          case 'string':
            if (typeof prop !== 'string') {
            }
            throw new Error(key + ' is NOT a String');
            break;
          default:
            if (!prop) {
              throw new Error(key + ' does not exist');
            }
            break;
        }
      }
    }
  }
}

var instance;
if (!instance) {
  instance = new Checks();
}

if (typeof define === 'function' && define.amd) {
  define(function() {
    return instance
  });
} else if (typeof exports === 'object') {
  module.exports = instance
} else {
  window.checks = instance
}
