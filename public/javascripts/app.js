$ = require('jquery');
var angular = require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');

var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

app.constant('VERSION', require('../../package.json').version);

require('./service');
require('./controller');

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
function($stateProvider, $urlRouterProvider, $locationProvider) {

    // setup states for home and applicants info
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'HomeCtrl',
      resolve: {
        postPromise: ['Applicants', function(Applicants){
            return Applicants.getAllApplicants();
          }
        ]
      }
    })
    .state('applicants', {
      url: '/applicants/{id}',
      templateUrl: '/applicants.html',
      controller: 'ApplicantsCtrl'
    })
    .state('apply', {
      url: '/applicants/{id}/apply',
      templateUrl: '/apply.html',
      controller: 'ApplyCtrl'
    })
    .state('post', {
      url: '/post',
      templateUrl: '/post.html',
      controller: 'PostCtrl'
    })
    .state('review', {
      url: '/post/review',
      templateUrl: '/review.html',
      controller: 'ReviewCtrl'
    });
  $urlRouterProvider.otherwise('home');
}]);