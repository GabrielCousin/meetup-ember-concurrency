import Route from '@ember/routing/route';
import { all } from 'rsvp';
import $ from 'jquery';

export default Route.extend({
  model() {
    return all([
      this.store.findAll('student'),
      this.fetchMessages(),
      this.store.findAll('book')
    ]).then(function ([students, messages, books]) {
      return { students, messages, books }
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
