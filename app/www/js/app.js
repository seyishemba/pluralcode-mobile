angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$stateProvider.state('tabs', {
		url: '/tabs',
		abstract: true,
		templateUrl: 'views/tabs/tabs.html'
		})
	.state('tabs.home', {
		url: '/home',
		views: {
			'home-tab': {
				templateUrl: 'views/home/home.html'
			}
		}
	});
	$urlRouterProvider.otherwise('/tabs/home');
	$ionicConfigProvider.tabs.position('top');
	
	})
 

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
