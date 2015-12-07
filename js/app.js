/**
 *  Copyright @ ibrahim shendy
 */
var myApp = angular.module('myApp', ['ngRoute' , 'appControllers']);

var appControllers = angular.module('appControllers' , []);

myApp.config(['$routeProvider' , function($routeProvider){

  $routeProvider.
    when('/login' , {
        templateUrl : 'views/login.html' ,
        controller : 'RegisterationController'
    }).
    when('/register' , {
        templateUrl : 'views/register.html' ,
        controller : 'RegisterationController'
    }).
    when('/meetings' , {
        templateUrl : 'views/meetings.html' ,
        controller : 'MeetingsController'
    }).
    otherwise({
        redirectTo : '/login'
    })

}])

myApp.run(['$rootScope','$location','loginService' , function($rootScope , $location , loginService) 
{
    var routespermission = ['/meetings'];
    $rootScope.$on('$routeChangeStart' , function(){
        /*console.log('>>exit tab'+routespermission.indexOf($location.path()));
        console.log('>>logged'+loginService.logged());*/
        if(routespermission.indexOf($location.path()) !=-1){
            var connected = loginService.logged();
            connected.then(function(msg)
            {
                //console.log(msg.data)
                if(!msg.data) $location.path('/login')
            })
        }

        if($location.path() == '/login') {
            var connected = loginService.logged();
            connected.then(function(msg)
            {
                //console.log(msg.data)
                if(msg.data) $location.path('/meetings')
            })
        }
    })
}])
