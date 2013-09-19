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

exports.start = function (port,endpoints) {
  var app = express();

  endpoints.forEach(function (ep) {
    app.get('/' + ep.endpoint, function (req, res) {
      ep.exec(function (result) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Length', result.length);
        res.json(result);
      })
    });
  });
  app.listen(port);
};