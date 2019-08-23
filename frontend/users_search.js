const APIUtil = require("./api_util.js");

class UsersSearch {
  constructor(el) {
    this.el = el;
    this.ul = this.el.find("ul");
    this.input = this.el.find("input");
    this.input.on("input", this.handleInput.bind(this));
  }

  handleInput(e) {
    // debugger
    APIUtil.searchUsers(this.input.val()).then((res) => {
      // debugger
      this.render(res);
    }).fail( (x) => {
      // debugger
    });
  }

  render(res) {
    // debugger;
    this.ul.empty();
    res.forEach((user) => {
      let li = $("<li>");
      let link = $("<a>");
      link.text(user.username);
      link.prop("href", `/users/${user.id}`);
      li.append(link);
      let btn = $("<button>");
      btn.addClass("follow-toggle");
      btn.data("user-id", user.id);
      btn.data("initial-follow-state", (user.followed) ? "followed" : "unfollowed" );
      btn.text((user.followed) ? "unfollow" : "follow");
      li.append(btn);
      this.ul.append(li);
    });
    this.followHandler();
    // debugger
  }

  followHandler() {
    let $followButtons = $(".follow-toggle");
    $followButtons.each((idx, el) => {
      followButtonsArr.push(new FollowToggle(el));
    });
  }
}

module.exports = UsersSearch;