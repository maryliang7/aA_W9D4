const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor(el) {
    this.el = $(el);
    this.userId = this.el.data("user-id");
    this.followState = this.el.data("initial-follow-state");
    this.handleClick();
    this.render();

  }

  render() {
    if (this.followState === "unfollowed") {
      this.el.text("Follow!");
    } else {
      this.el.text("Unfollowed");
    }
  }

  handleClick() {
    this.el.on("click", (e) => {
      e.preventDefault();
      if (this.followState === "followed") {
        this.el.prop("disabled", true);
        APIUtil.unfollowUser(this.userId).then(() => {
          this.followState = "unfollowed";
          this.el.prop("disabled", false);
          this.render();
        });
      } else {
        this.el.prop("disabled", true);
        APIUtil.followUser(this.userId).then(() => {
          this.el.prop("disabled", false);
          this.followState = "followed";
          this.render();
        });
      }
    });
  }

}

module.exports = FollowToggle;