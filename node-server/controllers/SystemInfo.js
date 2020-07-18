"use strict";

var utils = require("../utils/writer.js");
var SystemInfo = require("../service/SystemInfoService");

module.exports.checkTemp = function checkTemp(req, res, next) {
  SystemInfo.checkTemp()
    .then(function (response) {
      const { exec } = require("child_process");
      exec("vcgencmd measure_temp", (err, stdout, stderr) => {
        if (err) {
          // node couldn't execute the command
          return;
        }

        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        response = `${stdout}`;
        console.log(`stderr: ${stderr}`);
      });
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
