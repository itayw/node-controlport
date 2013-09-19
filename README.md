#node-controlport

Add a control-port to your nodejs apps.

## Install

```
$ npm install node-controlport
```

## Use in your code

```
var cp = require('node-controlport');
var cp_endpoints = [];

cp_endpoints.push({
  endpoint: 'status',
  exec: function (callback) {
    callback({status: 'Success'});
  }
});

cp.start(42101,cp_endpoints);
```
