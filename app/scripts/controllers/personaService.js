'use strict';

/**
 * @ngdoc function
 * @name spaHappyApp.controller:PersonaService
 * @description
 * # PersonaService
 * Controller of the spaHappyApp
 */
angular.module('spaHappyApp').controller('PersonaService', personaService);

personaService.$inject = ['personaHttp'];

function personaService (personaHttp){
  var vm = this;
  vm.$onInit = onInit;
  vm.form = {};
  vm.savePersona = savePersona;
  vm.getAllPersona = getAllPersona;
  vm.deletePersona = deletePersona;

  function onInit() {
    vm.getAllPersona();
  }

  function savePersona() {
    personaHttp.savePersona(vm.form)
    .then(function(data){
      vm.getAllPersona();

      Swal.fire({
        type: 'success',
        title: 'successful',
        text: 'the persona was successfully stored'
      })
    })
    .catch(function(err){
      Swal.fire({
        type: 'err',
        title: 'not successful',
        text: 'the persona not successfully stored'
      })
    }); 
  }

  function getAllPersona() {
    personaHttp.getAllPersona()
    .then(function(result){
      vm.PersonaList = result.data
    })
    .catch(function(err){
      console.log(err);
    })
  }

  function deletePersona() {
    personaHttp .deletePersona($state.params.id)
    .then(function(result){
      Swal.fire({
        type: 'success',
        title: 'successful',
        text: 'la persona ha sido eliminada'
      })
    })
    .catch(function(err){
      console.log(err);
    })
  }
}