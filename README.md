# FB Calendar puzzle

Task I was once (November 2011) asked to do when applying for position at Facebook.

----

To see it working, download code and in browser open `public/index.html` file.

Few notes:  
Code consists of few simple modules placed in separate files in lib folder (Node.js style) that are bundled for browser with [Webmake](with https://github.com/medikoo/modules-webmake). Generated bundle that's loaded in browser is `public/program.js`.

`layOutDay` function can be found in `lib/lay-out-day.js`, corresponding tests are in `test/lay-out-day`. Tests can be run with Node.js using [TAD](https://github.com/medikoo/tad) package:

```
$ npm install
$ npm test
```
