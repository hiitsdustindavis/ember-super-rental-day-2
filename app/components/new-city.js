import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    addNewCity1(){
      var params = {
        name: this.get('name'),
        country: this.get('country')
      };
      this.set('addNewRental', false);
      this.sendaction('addNewCity2', params);
    }
  }
});
