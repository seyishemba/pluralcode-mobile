angular.module('App', ['ionic', 'ngCordova', 'pdf'])

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
				templateUrl: 'views/home/home.html',
				controller: 'HomeController'
			}
		}
	})
	.state('tabs.classrooms', {
		url: '/classrooms',
		views: {
			'classrooms-tab': {
				templateUrl: 'views/classrooms/classrooms.html',
				controller: "ClassroomsController"
			}
		}
	})
	.state('tabs.notifications', {
		url: '/notifications',
		views: {
			'notifications-tab': {
				templateUrl: 'views/notifications/notifications.html',
			}
		}
	})
	.state('tabs.view_course', {
		url: '/view_course/:course_id:reg_no:password',
		views: {
			'classrooms-tab': {
				templateUrl: 'views/view_course/view_course.html',
				controller: "ViewCourseController"
			}
			
		}
	})
	.state('tabs.pdf_viewer', {
		url: '/pdf_view/:doc_url',
		views: {
			'classrooms-tab': {
				templateUrl: 'views/pdf_view/pdfview.html',
				controller: "PdfViewController"
			}
			
		}
	})
	.state('tabs.code_editor', {
		url: '/code_editor',
		views: {
			'home-tab': {
				templateUrl: 'views/code_editor/code_editor.html',
				controller: 'CodeController'
			}
			
		}
	})
	.state('tabs.offline_archives', {
		url: '/offline_archives',
		views: {
			'home-tab': {
				templateUrl: 'views/offline_archives/offline_archives.html',
			}
			
		}
	})
	.state('tabs.achievements', {
		url: '/achievements',
		views: {
			'home-tab': {
				templateUrl: 'views/achievements/achievements.html',
			}
			
		}
	})
	.state('tabs.live_mentor', {
		url: '/live_mentor',
		views: {
			'home-tab': {
				templateUrl: 'views/live_mentor/live_mentor.html',
			}
			
		}
	})
	.state('tabs.contact-us', {
		url: '/contact-us',
		views: {
			'home-tab': {
				templateUrl: 'views/contact-us/contact-us.html',
			}
			
		}
	})
	.state('tabs.invite', {
		url: '/invite',
		views: {
			'home-tab': {
				templateUrl: 'views/invite/invite.html',
			}
			
		}
	});
	$urlRouterProvider.otherwise('/tabs/home');
	$ionicConfigProvider.tabs.position('top');
	$ionicConfigProvider.navBar.alignTitle('center');
	$ionicConfigProvider.scrolling.jsScrolling(false);
	
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
