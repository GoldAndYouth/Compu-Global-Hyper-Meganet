module.exports = function($scope, $stateParams, Applicants){
	$scope.applicant = Applicants.applicants[$stateParams.id];

	// move this val to database and make it a unique hash string instead of int
	$scope.applicant.index = $stateParams.id;
};