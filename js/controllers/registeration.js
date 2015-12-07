myApp.controller('RegisterationController' , 
	[ '$scope' , '$location' , 'loginService' , 'sessionService' , function($scope , $location , loginService , sessionService)
	{

		$scope.msg = ''
		$scope.login = function(user)
		{
			loginService.login(user , $scope)
		} // Login Function 

		$scope.register = function()
		{
			$location.path('/login')
		} // resiter Function

		 

}]);  // RegisterationController