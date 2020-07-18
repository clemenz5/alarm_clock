'use strict';

var utils = require('../utils/writer.js');
var SystemInfo = require('../service/SystemInfoService');

module.exports.checkTemp = function checkTemp (req, res, next) {
  SystemInfo.checkTemp()
    .then(function (response) {
      response = "test"
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
