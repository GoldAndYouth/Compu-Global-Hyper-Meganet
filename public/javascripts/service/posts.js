// Service that stores and returns posts
module.exports = function() {

  // Array to support possible adding of multiple posts at once
  var postList = [];

  var addPost = function(newObj) {
      postList.push(newObj);
  };

  var getPost = function(){
      return postList;
  };

  var clearPosts = function(){
      postList.length = 0;
  };

  return {
    addPost: addPost,
    getPost: getPost,
    clearPosts: clearPosts
  };

};
