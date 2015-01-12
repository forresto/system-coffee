// Ideally, this would be a proper jspm dependency.
// For now, using http://coffeescript.org/extras/coffee-script.js
// var Coffee = require('coffee-script');
var Coffee = window.CoffeeScript;

exports.translate = function(load) {
  var output = Coffee.compile(load.source, {
    sourceMap: true,
    bare: true
  });
  load.source = output.js;
  load.metadata.sourceMap = output.v3SourceMap;
};