'use strict';

/**
 * @ngdoc service
 * @name spaHappyApp.httpconfig.constant
 * @description
 * # httpconfig.constant
 * Constant in the spaHappyApp.
 */
angular.module('spaHappyApp').constant('httpConfig', {
  url:'http://localhost:9090/services/',

  persona:{
    persona: 'persona/'
  },

  sorteoPremio:{
    sorteoPremio: 'sorteo/'
  }
});
