import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import $ from 'jquery';

export default Route.extend({
  model() {
    return hash({
      students: this.store.findAll('student'),
      books: this.store.findAll('book'),
      messages: this.fetchMessages()
    });
  },

  fetchMessages() {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: '/api/messages',
        crossDomain: true,
        xhrFields: { withCredentials: true },
        headers: {
          Accept: 'application/vnd.api+json'
        },
        accepts: {
          jsonapi: 'application/vnd.api+json'
        },
        converters: {
          'text jsonapi': $.parseJSON
        },
        dataType: 'jsonapi',
        success (response) {
          resolve(response.data);
        },
        error(reason = {}) {
          reject(reason);
        }
      });
    });
  }
});
