var
  http = require('http'),
  cp = require('../../lib/node-controlport');


"use strict";
describe("server", function () {

  it("should run the HTTP server", function () {
    var endpoints = [];
    endpoints.push({
      endpoint: 'status',
      exec: function (callback) {
        callback({status: 'Success'});
      }
    });
    cp.start(42111, endpoints, function (err) {
      if (err)
        throw err;
      http.request('http://localhost:42111/status', function (data) {
        cp.stop();
      });
    });
  });

  it("should have a valid endpoint", function () {
    var endpoints = [];
    endpoints.push({
      endpoint: 'status',
      exec: function (callback) {
        callback({status: 'Success'});
      }
    });
    cp.start(42111, endpoints, function (err) {
      if (err)
        throw err;

      http.request('http://localhost:42111/status', function (data) {
        cp.stop();
      })
    });
  });

});