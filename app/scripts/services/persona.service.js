'use strict';

/**
 * @ngdoc service
 * @name spaHappyApp.persona.service
 * @description
 * # persona.service
 * Service in the spaHappyApp.
 */
angular.module('spaHappyApp').service('personaHttp', personaHttp);

personaHttp.$inject = ['$http', '$q', 'httpConfig'];

function personaHttp ($http, $q, httpConfig) {
  let persona = {
    savePersona: savePersona,
    getAllPersona : getAllPersona,
    deletePersona : deletePersona
  }

  return persona;

  function savePersona(body){
    var defered = $q.defer();
    var promise = defered.promise;

    const url = httpConfig.url + httpConfig.persona.persona;

    $http.post(url, body)
    .then(function(data){
      defered.resolve(data);
    })
    .catch(function(err){
      defered.reject(err);
    });

    return promise;
  }

  function getAllPersona(){
    var defered = $q.defer();
    var promise = defered.promise;

    const url = httpConfig.url + httpConfig.persona.persona;

    $http.get(url)
    .then(function(data){
      console.log(data);
      defered.resolve(data);
    })
    .catch(function(err){
      console.log(err);
      defered.reject(err);
    });

    return promise;
  }

  function deletePersona(id){
    var defered = $q.defer();
    var promise = defered.promise;

    const url = httpConfig.url + httpConfig.persona.persona + id;

    $http.get(url)
    .then(function(data){
      console.log(data);
      defered.resolve(data);
    })
    .catch(function(err){
      console.log(err);
      defered.reject(err);
    });

    return promise;
  }
}
