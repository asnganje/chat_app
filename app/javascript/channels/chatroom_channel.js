import consumer from "channels/consumer"
// import scroll_bottom from "../application"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    return $('#message-container').append(data.mod_message)
    // scroll_bottom()
  }
});
