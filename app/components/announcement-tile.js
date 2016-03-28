import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement) {
      if(confirm("You sure you wanna do that, buddy?")) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
