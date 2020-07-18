'use strict';


/**
 * Check the temperature of your pi
 *
 * returns Long
 **/
exports.checkTemp = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

