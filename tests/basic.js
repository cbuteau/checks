
let checks = require('./');

describe('1 level tests', function() {

  it ('array', function() {
    let param = {
      results: 'array'
    };

    expect(checks.validate({
      results: []
    }), param).toBe(true);

    expect(function() {
      checks.validate({
        results: {}
      }, param);
    }).toThrow();


  });

});
