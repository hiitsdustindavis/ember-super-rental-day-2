import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('emitSave', params);
    }
  }
});
