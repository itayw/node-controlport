var
  http = require('http'),
  cp = require('../../lib/node-controlport');


"use strict";
describe("server", function () {
  before(function (done) {
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
      done();
    });
  });

  it("should run the HTTP server", function () {
    http.request('http://localhost:42111/status', function (data) {
      expect(data).to.be.ok;
    });
  });

  it("should have a valid endpoint", function () {
    http.request('http://localhost:42111/status', function (data) {
      expect(data).to.be.ok;
    })
  });

  after(function (done) {
    cp.stop();
    done();
  })

});