function find_user_by_id(user_id) {
  return _.find(users, function(user) {
    return user.id === user_id;
  });
}

function find_comments_by_post_id(post_id) {
  return _.find(comments, function(comment) {
    return comment.post_id === post_id;
  });
}

let comments2 = _.go(
    comments,
    _.map(function(comment) {
      return _.extend({
        user: find_user_by_id(comment.user_id)
      }, comment);
    }),
    _.group_by('post_id'));

let posts2 = _.map(posts, function(post) {
  return _.extend({
    comments: find_comments_by_post_id(post.id),
    user: find_user_by_id(post.user_id)
  }, post);
});