var fs = require('fs');

Utils = {

  /**
   * @name screenShotDirectory
   * @description The directory where screenshots will be created
   * @type {String}
   */
  screenShotDirectory : './test/screenshots/',

  /**
   * @name writeScreenShot
   * @description Write a screenshot string to file.
   * @param {String}
   *          data The base64-encoded string to write to file
   * @param {String}
   *          filename The name of the file to create (do not specify directory)
   */
  writeScreenShot : function(data, filename) {

    var stream = fs.createWriteStream(this.screenShotDirectory + filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();

  }

};

module.exports = Utils;