import Service from '@ember/service';
import { get, set } from '@ember/object';
import { task } from 'ember-concurrency';
import $ from 'jquery';

export default Service.extend({
  init() {
    this._super(...arguments);
    get(this, 'syncMessages').perform()
  },

  syncMessages: task(function * () {
    let res = yield new Promise(function (resolve, reject) {
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
          resolve(response);
        },
        error(reason = {}) {
          reject(reason);
        }
      });
    });
    set(this, 'messages', res.data);
  }).drop()
});
