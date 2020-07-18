'use strict';


/**
 * Get all existing Alarm Clocks
 * Get all existing Alarm Clocks
 *
 * returns Long
 **/
exports.getAllAlarmClocks = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

