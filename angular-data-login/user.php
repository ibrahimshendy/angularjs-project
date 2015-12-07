<?php
	$user = json_decode(file_get_contents('php://input')) ; // get user from json headers..
	if($user->email == 'a@b.c' && $user->password == '123456') {
		session_start();
		$_SESSION['uid'] = uniqid('angular_');
		echo $_SESSION['uid'];
		exit;
	}
?>