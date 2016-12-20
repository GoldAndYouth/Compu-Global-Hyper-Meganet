// Get call to server returns applicants
module.exports = function($http){  
  // Object containing applicants array and methods for interacting
  // with it 
  var factoryObject = {applicants: []};

  // get all applicants and create a deep copy 
  factoryObject.getAllApplicants = function() {
    return $http.get('/applicants').success(function(data){
      angular.copy(data, factoryObject.applicants);
    });
  };
  return factoryObject;
};