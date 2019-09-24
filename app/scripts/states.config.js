'use strict';

angular.module('spaHappyApp').config(settings);

settings.$inject = ['$stateProvider', '$urlRouterProvider'];

function settings ($stateProvider, $urlRouterProvider) {
    var homeState = {
        abstract: true,
        name: 'home',
        templateUrl: 'views/home.html'
    }

    var mainState = {
        name: 'home.main',
        url: '/',
        templateUrl: 'views/main.html'
    }

    var personaState = {
        name: 'home.persona',
        url: '/personaService',
        templateUrl: 'views/persona.html',
        controller: 'PersonaService as vm'
    }

    var sorteoState = {
        name: 'home.sorteo',
        url: '/sorteoService',
        templateUrl: 'views/sorteo.html',
        controller: 'SorteoService as vm'
    }

    var deletePersonaState = {
        name: 'home.deletePersonaService',
        url: '/personaService/{id}',
        templateUrl: 'views/persona.html',
        controller: 'PersonaService as vm'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
    $stateProvider.state(personaState);
    $stateProvider.state(sorteoState);
    $stateProvider.state(deletePersonaState);

    $urlRouterProvider.when('', '/');
}
