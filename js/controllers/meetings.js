myApp.controller('MeetingsController' , [ '$scope' , '$location' , 'meetingService' , 'loginService' , function($scope , $location ,meetingService ,loginService )
{
	$scope.users = meetingService.getUsers($scope)

	$scope.logout = function() {
		loginService.logout()
	}

}]) // MeetingsController