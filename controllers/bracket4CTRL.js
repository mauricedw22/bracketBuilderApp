
app.controller('bracket4CTRL',function($scope){

$scope.showBracket = true;

$scope.matchStatus = '';

$scope.finalist1 = 'Finalist A';

$scope.finalist2 = 'Finalist B';

$scope.loser1 = '#1 vs #4 Loser';

$scope.loser2 = '#2 vs #3 Loser';

$scope.runnerup = '';

$scope.realChampion = '';

$scope.bracket = function(){
	
	$scope.showBracket = false;
	
};

$scope.clear = function(){
	
	$scope.player1 = '';
	$scope.player2 = '';
	$scope.player3 = '';
	$scope.player4 = '';
	
	$scope.loser1 = '#1 vs #4 Loser';
	$scope.loser2 = '#2 vs #3 Loser';
	
	$scope.finalist1 = 'Finalist A';
	$scope.finalist2 = 'Finalist B';
	
	$scope.runnerup = '';
	
	$scope.realChampion = '';
	
	$scope.matchStatus = '';
	
	$scope.showBracket = true;

};

$scope.loser1wins = function(){
	
  $scope.runnerup = $scope.loser1;
  $scope.matchStatus = $scope.loser1 + " defeats " + $scope.loser2 + " for 3rd place!!!";
	
};

$scope.loser2wins = function(){
	
	$scope.runnerup = $scope.loser2;
	$scope.matchStatus = $scope.loser2 + " defeats " + $scope.loser1 + " for 3rd place!!!";
	
};

$scope.player1wins = function(){
	
	$scope.finalist1 = $scope.player1;
	$scope.loser1 = $scope.player4;
	$scope.matchStatus = $scope.player1 + " defeats " + $scope.player4 + " and has reached the CHAMPIONSHIP!!!";
	
};

$scope.player4wins = function(){
	
	$scope.finalist1 = $scope.player4;
	$scope.loser1 = $scope.player1;
	$scope.matchStatus = $scope.player4 + " defeats " + $scope.player1 + " and has reached the CHAMPIONSHIP!!!";
	
};

$scope.player3wins = function(){
	
	$scope.finalist2 = $scope.player3;
	$scope.loser2 = $scope.player2;
	$scope.matchStatus = $scope.player3 + " defeats " + $scope.player2 + " and has reached the CHAMPIONSHIP!!!";
	
};

$scope.player2wins = function(){
	
	$scope.finalist2 = $scope.player2;
	$scope.loser2 = $scope.player3;
	$scope.matchStatus = $scope.player2 + " defeats " + $scope.player3 + " and has reached the CHAMPIONSHIP!!!";
	
};

$scope.finalist1wins = function(){
	
	$scope.realChampion = $scope.finalist1;
	$scope.matchStatus = $scope.finalist1 + " is the CHAMPION!!!";
	
};

$scope.finalist2wins = function(){
	
	$scope.realChampion = $scope.finalist2;
	$scope.matchStatus = $scope.finalist2 + " is the CHAMPION!!!";
	
};



});