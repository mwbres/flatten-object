var assert = require('assert');
var flattenObject = require("../lib")

describe('flattenObject', function () {
  describe('when passed a series of valid inputs', function () {
    it('should return a copy of input object if no nested objects exist', function () {
      assert.deepEqual(flattenObject({
        foo: "bar",
        fizz: "buzz"
      }), {foo: "bar", fizz: "buzz"});
    });

    it('should return the flattened object if nested one layer deep', function () {
      assert.deepEqual(flattenObject({
        foo: {
          bar: "baz"
        }
      }), {"foo.bar": "baz"});
    });

    it('should return the flattened object if nested n layers deep', function () {
      assert.deepEqual(flattenObject({
        foo: {
          bar: {
            baz: "boop"
          }
        }
      }), {"foo.bar.baz": "boop"});
    });

    it('should return not remove empty objects', function () {
      assert.deepEqual(flattenObject({
        foo: {}
      }), {foo: {}});
    });
  });
});