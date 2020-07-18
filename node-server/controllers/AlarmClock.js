'use strict';

var utils = require('../utils/writer.js');
var AlarmClock = require('../service/AlarmClockService');

module.exports.getAllAlarmClocks = function getAllAlarmClocks (req, res, next) {
  AlarmClock.getAllAlarmClocks()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
