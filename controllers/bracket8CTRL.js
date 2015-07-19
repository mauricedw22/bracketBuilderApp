
app.controller('bracket8CTRL',function($scope){

$scope.showBracket = true;

$scope.matchStatus = '';

$scope.winner1 = '#1 vs #8 winner';

$scope.winner2 = '#4 vs #5 winner';

$scope.winner3 = '#3 vs #6 winner';

$scope.winner4 = '#2 vs #7 winner';

$scope.finalist1 = 'Finalist A';

$scope.finalist2 = 'Finalist B';

$scope.realChampion = '';

$scope.bracket = function(){
	
	$scope.showBracket = false;
	
};

$scope.clear = function(){
	
	$scope.player1 = '';
	$scope.player2 = '';
	$scope.player3 = '';
	$scope.player4 = '';
	$scope.player5 = '';
	$scope.player6 = '';
	$scope.player7 = '';
	$scope.player8 = '';

    $scope.winner1 = '#1 vs #8 winner';
    $scope.winner2 = '#4 vs #5 winner';
    $scope.winner3 = '#3 vs #6 winner';
    $scope.winner4 = '#2 vs #7 winner';
	
	$scope.finalist1 = 'Finalist A';
	$scope.finalist2 = 'Finalist B';
	
	$scope.realChampion = '';
	
	$scope.matchStatus = '';
	
	$scope.showBracket = true;
	
};

$scope.player1wins = function(){
	
	$scope.winner1 = $scope.player1;
	$scope.matchStatus = $scope.player1 + " defeats " + $scope.player8;
	
};

$scope.player8wins = function(){
	
	$scope.winner1 = $scope.player8;
	$scope.matchStatus = $scope.player8 + " defeats " + $scope.player1;
	
};

$scope.player4wins = function(){
	
	$scope.winner2 = $scope.player4;
	$scope.matchStatus = $scope.player4 + " defeats " + $scope.player5;
	
};

$scope.player5wins = function(){
	
	$scope.winner2 = $scope.player5;
	$scope.matchStatus = $scope.player5 + " defeats " + $scope.player4;
	
};

$scope.player3wins = function(){
	
	$scope.winner3 = $scope.player3;
	$scope.matchStatus = $scope.player3 + " defeats " + $scope.player6;
	
};

$scope.player6wins = function(){
	
	$scope.winner3 = $scope.player6;
	$scope.matchStatus = $scope.player6 + " defeats " + $scope.player3;
	
};

$scope.player2wins = function(){
	
	$scope.winner4 = $scope.player2;
	$scope.matchStatus = $scope.player2 + " defeats " + $scope.player7;
	
};

$scope.player7wins = function(){
	
	$scope.winner4 = $scope.player7;
	$scope.matchStatus = $scope.player7 + " defeats " + $scope.player2;
	
};

$scope.winner1wins = function(){
	
	$scope.finalist1 = $scope.winner1;
	$scope.matchStatus = $scope.winner1 + " defeats " + $scope.winner2 + " and has reached the CHAMPIONSHIP!!!"
	
};

$scope.winner2wins = function(){
	
	$scope.finalist1 = $scope.winner2;
	$scope.matchStatus = $scope.winner2 + " defeats " + $scope.winner1 + " and has reached the CHAMPIONSHIP!!!"
	
};

$scope.winner3wins = function(){
	
	$scope.finalist2 = $scope.winner3;
	$scope.matchStatus = $scope.winner3 + " defeats " + $scope.winner4 + " and has reached the CHAMPIONSHIP!!!"
	
};

$scope.winner4wins = function(){
	
	$scope.finalist2 = $scope.winner4;
	$scope.matchStatus = $scope.winner4 + " defeats " + $scope.winner3 + " and has reached the CHAMPIONSHIP!!!"
	
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