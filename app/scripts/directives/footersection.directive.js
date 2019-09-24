'use strict';

/**
 * @ngdoc directive
 * @name spaHappyApp.directive:footerSection.directive
 * @description
 * # footerSection.directive
 */
angular.module('spaHappyApp')
  .directive('footerSection', footerSection);
  
  function footerSection () {
    var directive = {
      //template: '<div><ng-transclude></ng-transclude></div>',
      templateUrl: './views/partial.footer.html',
      restrict: 'EAC',
      link: link,
      transclude: true
    };

    return directive;

    function link(scope, element, attrs) {
      //element.text('this is the footerSection.directive directive');
      scope.team = attrs.author;
    }
  }
