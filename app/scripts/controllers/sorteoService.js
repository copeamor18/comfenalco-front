'use strict';

/**
 * @ngdoc function
 * @name spaHappyApp.controller:SorteoService
 * @description
 * # SorteoService
 * Controller of the spaHappyApp
 */
angular.module('spaHappyApp').controller('SorteoService', sorteoService);

sorteoService.$inject = ['sorteoHttp'];

function sorteoService (sorteoHttp){
  var vm = this;
  vm.$onInit = onInit;
  vm.sorteoPremio = sorteoPremio;

  function onInit() {

  }

  function sorteoPremio() {
    sorteoHttp.sorteoPremio()
    .then(function(data){
      vm.datelleSorteoDTO = data.data.lista;

      Swal.fire({
        type: 'success',
        title: 'successful',
        text: 'The draw was successful'
      })
    })
    .catch(function(err){
      Swal.fire({
        type: 'err',
        title: 'not successful',
        text: err.estadoService.descripcion
      })
    }); 
  }
}