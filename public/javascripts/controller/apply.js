module.exports = function($scope, $stateParams, Applicants){
   $scope.applicant = Applicants.applicants[$stateParams.id];
}