'use strict';

/**
 * @ngdoc service
 * @name spaHappyApp.sorteo.service
 * @description
 * # sorteo.service
 * Service in the spaHappyApp.
 */
angular.module('spaHappyApp').service('sorteoHttp', sorteoHttp);

sorteoHttp.$inject = ['$http', '$q', 'httpConfig'];

function sorteoHttp ($http, $q, httpConfig) {
  let sorteo = {
    sorteoPremio: sorteoPremio
  }

  return sorteo;

  function sorteoPremio(){
    var defered = $q.defer();
    var promise = defered.promise;

    const url = httpConfig.url + httpConfig.sorteoPremio.sorteoPremio;

    console.log(url);

    $http.get(url)
    .then(function(data){
      defered.resolve(data);
    })
    .catch(function(err){
      defered.reject(err.data);
    });

    return promise;
  }
}
