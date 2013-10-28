# node-controlport
Add a control-port to your nodejs apps.

[![Build Status][3]][4] [![dependency status][5]][6] [![dev dependency status][7]][8] [![Coverage Status][1]][2]

[![NPM](https://nodei.co/npm/node-controlport.png?downloads=true&stars=true)](https://nodei.co/npm/node-controlport/)

When developing a nodejs application or server, it's sometimes useful to have an easy to use control-port. 
```node-controlport``` helps you to control the application/service behavior in a detached manner from your main application logic.

You require ```node-controlport``` and then assign endpoints to take care of incoming requests, 
the Usage example below shows how to handle a basic ```status``` check.

## Install

```bash
$ npm install node-controlport
```

## Usage

```JavaScript
var cp = require('node-controlport');
var cp_endpoints = [];

cp_endpoints.push({
  endpoint: 'status',
  exec: function (callback) {
    callback({status: 'Success'});
  }
});

cp.start(42101, cp_endpoints);
```

This will add an endpoint named ```status``` on ```http://localhost:42101```.

## License

The MIT License (MIT)

Copyright (c) 2013 Itay Weinberger

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[1]: https://coveralls.io/repos/itayw/node-controlport/badge.png
[2]: https://coveralls.io/r/itayw/node-controlport
[3]: https://travis-ci.org/itayw/node-controlport.png
[4]: https://travis-ci.org/itayw/node-controlport
[5]: https://david-dm.org/itayw/node-controlport.png
[6]: https://david-dm.org/itayw/node-controlport
[7]: https://david-dm.org/itayw/node-controlport/dev-status.png
[8]: https://david-dm.org/itayw/node-controlport#info=devDependencies


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/itayw/node-controlport/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

