
app.controller('bracket16CTRL',function($scope){

$scope.showBracket = true;

$scope.matchStatus = '';

    $scope.player1 = '';
	$scope.player2 = '';
	$scope.player3 = '';
	$scope.player4 = '';
	$scope.player5 = '';
	$scope.player6 = '';
	$scope.player7 = '';
	$scope.player8 = '';
	$scope.player9 = '';
	$scope.player10 = '';
	$scope.player11 = '';
	$scope.player12 = '';
	$scope.player13 = '';
	$scope.player14 = '';
	$scope.player15 = '';
	$scope.player16 = '';

    $scope.winner1 = '#1 vs #16 winner';
    $scope.winner2 = '#8 vs #9 winner';
    $scope.winner3 = '#5 vs #12 winner';
    $scope.winner4 = '#4 vs #13 winner';
	$scope.winner5 = '#3 vs #14 winner';
    $scope.winner6 = '#6 vs #11 winner';
    $scope.winner7 = '#7 vs #10 winner';
    $scope.winner8 = '#2 vs #15 winner';
	
	$scope.semifinalist1 = 'Semifinalist A';
	$scope.semifinalist2 = 'Semifinalist B';
	$scope.semifinalist3 = 'Semifinalist C';
	$scope.semifinalist4 = 'Semifinalist D';
	
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
	$scope.player9 = '';
	$scope.player10 = '';
	$scope.player11 = '';
	$scope.player12 = '';
	$scope.player13 = '';
	$scope.player14 = '';
	$scope.player15 = '';
	$scope.player16 = '';

    $scope.winner1 = '#1 vs #16 winner';
    $scope.winner2 = '#8 vs #9 winner';
    $scope.winner3 = '#5 vs #12 winner';
    $scope.winner4 = '#4 vs #13 winner';
	$scope.winner5 = '#3 vs #14 winner';
    $scope.winner6 = '#6 vs #11 winner';
    $scope.winner7 = '#7 vs #10 winner';
    $scope.winner8 = '#2 vs #15 winner';
	
	$scope.semifinalist1 = 'Semifinalist A';
	$scope.semifinalist2 = 'Semifinalist B';
	$scope.semifinalist3 = 'Semifinalist C';
	$scope.semifinalist4 = 'Semifinalist D';
	
	$scope.finalist1 = 'Finalist A';
	$scope.finalist2 = 'Finalist B';
	
	$scope.realChampion = '';
	
	$scope.matchStatus = '';
	
	$scope.showBracket = true;
	
};

$scope.player1wins = function(){
	
	$scope.winner1 = $scope.player1;
	$scope.matchStatus = $scope.player1 + " defeats " + $scope.player16;
	
};

$scope.player16wins = function(){
	
	$scope.winner1 = $scope.player16;
	$scope.matchStatus = $scope.player16 + " defeats " + $scope.player1;
	
};

$scope.player8wins = function(){
	
	$scope.winner2 = $scope.player8;
	$scope.matchStatus = $scope.player8 + " defeats " + $scope.player9;
	
};

$scope.player9wins = function(){
	
	$scope.winner2 = $scope.player9;
	$scope.matchStatus = $scope.player9 + " defeats " + $scope.player8;
	
};

$scope.player5wins = function(){
	
	$scope.winner3 = $scope.player5;
	$scope.matchStatus = $scope.player5 + " defeats " + $scope.player12;
	
};

$scope.player12wins = function(){
	
	$scope.winner3 = $scope.player12;
	$scope.matchStatus = $scope.player12 + " defeats " + $scope.player5;
	
};

$scope.player13wins = function(){
	
	$scope.winner4 = $scope.player13;
	$scope.matchStatus = $scope.player13 + " defeats " + $scope.player4;
	
};

$scope.player4wins = function(){
	
	$scope.winner4 = $scope.player4;
	$scope.matchStatus = $scope.player4 + " defeats " + $scope.player13;
	
};

$scope.player3wins = function(){
	
	$scope.winner5 = $scope.player3;
	$scope.matchStatus = $scope.player3 + " defeats " + $scope.player14;
	
};

$scope.player14wins = function(){
	
	$scope.winner5 = $scope.player14;
	$scope.matchStatus = $scope.player14 + " defeats " + $scope.player3;
	
};

$scope.player6wins = function(){
	
	$scope.winner6 = $scope.player6;
	$scope.matchStatus = $scope.player6 + " defeats " + $scope.player11;
	
};

$scope.player11wins = function(){
	
	$scope.winner6 = $scope.player11;
	$scope.matchStatus = $scope.player11 + " defeats " + $scope.player6;
	
};

$scope.player7wins = function(){
	
	$scope.winner7 = $scope.player7;
	$scope.matchStatus = $scope.player7 + " defeats " + $scope.player10;
	
};

$scope.player10wins = function(){
	
	$scope.winner7 = $scope.player10;
	$scope.matchStatus = $scope.player10 + " defeats " + $scope.player7;
	
};

$scope.player15wins = function(){
	
	$scope.winner8 = $scope.player15;
	$scope.matchStatus = $scope.player15 + " defeats " + $scope.player2;
	
};

$scope.player2wins = function(){
	
	$scope.winner8 = $scope.player2;
	$scope.matchStatus = $scope.player2 + " defeats " + $scope.player15;
	
};

//2nd Round

$scope.winner1wins = function(){
	
	$scope.semifinalist1 = $scope.winner1;
	$scope.matchStatus = $scope.winner1 + " defeats " + $scope.winner2 + " and has reached the SEMIFINALS!!!"
	
};

$scope.winner2wins = function(){
	
	$scope.semifinalist1 = $scope.winner2;
	$scope.matchStatus = $scope.winner2 + " defeats " + $scope.winner1 + " and has reached the SEMIFINALS!!!"
	
};

$scope.winner3wins = function(){
	
	$scope.semifinalist2 = $scope.winner3;
	$scope.matchStatus = $scope.winner3 + " defeats " + $scope.winner4 + " and has reached the SEMIFINALS!!!"
	
};

$scope.winner4wins = function(){
	
	$scope.semifinalist2 = $scope.winner4;
	$scope.matchStatus = $scope.winner4 + " defeats " + $scope.winner3 + " and has reached the SEMIFINALS!!!"
	
};

$scope.winner5wins = function(){
	
	$scope.semifinalist3 = $scope.winner5;
	$scope.matchStatus = $scope.winner5 + " defeats " + $scope.winner6 + " and has reached the SEMIFINALS!!!"
	
};

$scope.winner6wins = function(){
	
	$scope.semifinalist3 = $scope.winner6;
	$scope.matchStatus = $scope.winner6 + " defeats " + $scope.winner5 + " and has reached the SEMIFINALS!!!"
	
};

$scope.winner7wins = function(){
	
	$scope.semifinalist4 = $scope.winner7;
	$scope.matchStatus = $scope.winner7 + " defeats " + $scope.winner8 + " and has reached the SEMIFINALS!!!"
	
};

$scope.winner8wins = function(){
	
	$scope.semifinalist4 = $scope.winner8;
	$scope.matchStatus = $scope.winner8 + " defeats " + $scope.winner7 + " and has reached the SEMIFINALS!!!"
	
};

//Semis

$scope.semifinalist1wins = function(){
	
	$scope.finalist1 = $scope.semifinalist1;
	$scope.matchStatus = $scope.semifinalist1 + " has reached the CHAMPIONSHIP!!!";
	
};

$scope.semifinalist2wins = function(){
	
	$scope.finalist1 = $scope.semifinalist2;
	$scope.matchStatus = $scope.semifinalist2 + " has reached the CHAMPIONSHIP!!!";
	
};

$scope.semifinalist3wins = function(){
	
	$scope.finalist2 = $scope.semifinalist3;
	$scope.matchStatus = $scope.semifinalist3 + " has reached the CHAMPIONSHIP!!!";
	
};

$scope.semifinalist4wins = function(){
	
	$scope.finalist2 = $scope.semifinalist4;
	$scope.matchStatus = $scope.semifinalist3 + " has reached the CHAMPIONSHIP!!!";
	
};

//Finals

$scope.finalist1wins = function(){
	
	$scope.realChampion = $scope.finalist1;
	$scope.matchStatus = $scope.finalist1 + " is the CHAMPION!!!";
	
};

$scope.finalist2wins = function(){
	
	$scope.realChampion = $scope.finalist2;
	$scope.matchStatus = $scope.finalist2 + " is the CHAMPION!!!";
	
};


});





