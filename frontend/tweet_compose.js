class TweetCompose {
  constructor(el) {
    this.el = el;
    this.tweet.on("submit", this.submit.bind(this));
  }

  submit(e) {
    e.preventDefault();
    debugger
  }
}

module.exports = TweetCompose;