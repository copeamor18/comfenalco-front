'use strict';

/**
 * @ngdoc filter
 * @name spaHappyApp.filter:currencyFormat.filter
 * @function
 * @description
 * # currencyFormat.filter
 * Filter in the spaHappyApp.
 */
angular.module('spaHappyApp')
  .filter('currencyFormat', currencyFormatfilter);
  
  
  function currencyFormatfilter () {
    return function (value) {
      return 'COP ' + value.toLocaleString();
    };
  }
