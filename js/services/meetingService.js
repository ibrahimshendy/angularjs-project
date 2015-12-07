myApp.factory('meetingService' , function($http)
{
	return {
		getUsers: function(scope) {
			$http.get('angular-data-login/jsonFile.php').
	    	success(function(data, status, headers, config) {
	      		scope.users = data;
	    	}).
		    error(function(data, status, headers, config) {
		      // log error
		    });
		}
	}
})