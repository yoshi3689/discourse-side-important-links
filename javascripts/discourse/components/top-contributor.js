import Component from "@ember/component";
import User from "discourse/models/user";

export default Component.extend({
  tagName: "", index: 1,

  init() {
    this._super(...arguments);
    this.set("likes", this.data.likes_received);
    User.findByUsername(this.data.user.username).then((user) => {
      this.set("user", user);
    });
    this.set("index", index++);
  },
});
