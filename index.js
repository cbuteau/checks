
function stringProp(params) {
  let prop = params.prop;
  switch (params.test) {
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
      break;  }
}

function work(params) {
  let parameters = params.params;
  let checks = params.checks;
  let keys = Object.keys(parameters);
  let checks = Object.keys(checks);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let prop = parameters[key];
    if (checks.indexOf(key) !== -1) {
      let test = checks[key];
      let isString = typeof test === 'string';
      if (isString) {
        stringProp({
          prop: prop,
          test: test
        });
      } else {
        let checkKeys = Object.keys(test);
        for (let j = 0; i < checkKeys.length; j++) {
          let checkKey = checkKeys[j];
          work({
            parameters: prop,
            checks: test[checkKey]
          });
        }
      }
    }
  }
}

function Checks() {}

Checks.prototype = {
  validate: function(parameters, checks) {
    work({
      params: parameters,
      checks: checks
    });
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
