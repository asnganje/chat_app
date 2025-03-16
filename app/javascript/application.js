// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "channels"
import $ from "jquery";
window.$ = $;

scroll_bottom = function() {
  if($('#message-container').length > 0) {
    $('#message-container').scrollTop($('#message-container')[0].scrollHeight)
  }
}

$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  // submit_message();
  scroll_bottom();
})