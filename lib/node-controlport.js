/**
 *  joola.io
 *
 *  Copyright Itay Weinberger, <itay@joo.la>
 *
 *  Licensed under MIT License.
 *  See LICENSE, AUTHORS.
 *
 *  @license MIT <http://spdx.org/licenses/MIT>
 */

var express = require('express');
var app = express();
var httpServer;

exports.start = function (port, endpoints, callback) {
  endpoints.forEach(function (ep) {
    app.get('/' + ep.endpoint, function (req, res) {
      ep.exec(function (result) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Length', result.length);
        res.json(result);
      });
    });
  });
  httpServer = app.listen(port, function (err) {
    callback(err);
  });
};

exports.stop = function () {
  httpServer.close();
};