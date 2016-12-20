module.exports = function($scope, $location, Posts){
	$scope.submit = function(data) {
	  Posts.clearPosts();
	  Posts.addPost(data);
	  $location.path('/post/review');
	};
};
