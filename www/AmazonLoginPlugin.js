var exec = require('cordova/exec');
var PLUGIN_NAME = 'AmazonLoginPlugin';

var AmazonLoginPlugin = {
  authorize: function (options, successCallback, errorCallback) {
    exec(successCallback, errorCallback, PLUGIN_NAME, 'authorize', [options]);
  },
  authorizeAVS: function (options, successCallback, errorCallback) {
    exec(successCallback, errorCallback, PLUGIN_NAME, 'authorizeAVS', [options]);
  },
  fetchUserProfile: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, PLUGIN_NAME, 'fetchUserProfile', []);
  },
  getToken: function (options, successCallback, errorCallback) {
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getToken', [options]);
  },
  signOut: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, PLUGIN_NAME, 'signOut', []);
  }
};

module.exports = AmazonLoginPlugin;