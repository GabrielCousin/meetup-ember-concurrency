import Route from '@ember/routing/route';
import { task } from 'ember-concurrency';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    return {
      students: get(this, 'getRessource').perform('student'),
      books: get(this, 'getRessource').perform('book')
    };
  },

  getRessource: task(function * (modelName) {
    return yield this.store.findAll(modelName);
  }),

  // actions: {
  //   onSync() {
  //     this.refresh();
  //   }
  // }
});
