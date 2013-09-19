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

  it("should run the HTTP server", function (done) {
    var options = {
      hostname: '127.0.0.1',
      port: 42111,
      path: '/',
      method: 'GET'
    };

    var request = require('supertest'),
    request = request('http://localhost:42111');
    request.get('/').expect(404, function (err) {
      if (err)
        return done(err);
      done();
    });
  });

  it("should have a valid endpoint", function (done) {
    var options = {
      hostname: 'localhost',
      port: 42111,
      path: '/status',
      method: 'GET'
    };

    var request = require('supertest'),
    request = request('http://localhost:42111/status');
    request.get('/').expect(200).end(function (err, res) {
      if (err)
        return done(err)

      var result = res.body.status;
      expect(result).to.equal('Success');

      done();

    });
  });

  after(function (done) {
    cp.stop();
    done();
  })

});