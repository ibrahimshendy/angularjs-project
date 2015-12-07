myApp.factory('loginService' , function($http , $location , sessionService)
{
	return {
		login:function(user , scope){
			var $promise = $http.post('angular-data-login/user.php' , user); // Send Data For Check Login..
			$promise.then(function(msg)
			{
				var uid = msg.data
				if(uid){
					sessionService.set('uid' , uid)
					$location.path('/meetings')
					//scope.msg = 'Successfully Login'
				} 
				else{
					scope.msg = 'Login Failed'
					$location.path('/login')
				}
			})
		},
		logout:function(){
			sessionService.destroy('uid')
			$location.path('/login')
		},
		logged:function(){
			var $checkSessionServer = $http.post('angular-data-login/check_session.php');
			return $checkSessionServer;
			/*if(sessionService.get('user') != null){
				return true;
			}
			return false;*/
		}
	}
})