import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  messenger: service(),

  // actions: {
  //   cancelSync() {
  //     this.get('messenger.syncMessages.last').cancel();
  //   }
  // }
});
