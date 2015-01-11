var Coffee = require('coffee-script');

exports.translate = function(load) {
  var output = Coffee.compile(load.source, {sourceMap:true});
  load.source = output.js;
  load.metadata.sourceMap = output.sourceMap;
};