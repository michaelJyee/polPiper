var app = angular.module('bapp', ['ngAnimate','ui.router', 'classy', 'ui.bootstrap', 'classy']);

app.config(['$httpProvider', '$stateProvider', function($httpProvider, $stateProvider){
  $stateProvider
  .state('master-detail', {
    url: "/master-detail/:variationIdx/:p13nId/:campaignId",
    template: JST['bapp/templates/master_detail'],
    controller: 'MasterDetailController'
  })
  .state('master-detail.list', {
    url: "/list",
    template: JST['bapp/templates/list']
  })
  .state('master-detail.verification', {
    url: "/verification/:type/:tag",
    template: JST['bapp/templates/verification'],
    controller: 'VerificationController'
  })
  .state('master-detail.personalization', {
    url:'/personalization/:directive/:element/:path/',
    template: JST['bapp/templates/personalization'],
    controller: 'PersonalizationController'
  })
  .state('master-detail.advanced', {
    url: '/advanced',
    template: JST['bapp/templates/advanced'],
    controller: 'AdvancedController'
  })
  .state('success', {
    url: "/success",
    template: JST['bapp/templates/success']
  });
}]);
