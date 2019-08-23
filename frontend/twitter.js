const FollowToggle = require("./follow_toggle");
const UsersSearch = require("./users_search");
const TweetCompose = require("./tweet_compose");

$( () => {

  let $followButtons = $(".follow-toggle");
  let followButtonsArr = [];
  // debugger
  $followButtons.each((idx, el) => {
    followButtonsArr.push(new FollowToggle(el));
  });

  let $usersSearch = $(".users-search");
  new UsersSearch($usersSearch);
  
  let $tweetform = $(".tweet-compose");
  new TweetCompose($tweetform);
  debugger
});
