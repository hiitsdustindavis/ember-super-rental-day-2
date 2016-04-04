import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({ //RSVP Hash is a promise method. It says "don't fire until my contents are completed"
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement'),
      cities: this.store.findAll('city')
    });
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },

    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    }
  }
});
