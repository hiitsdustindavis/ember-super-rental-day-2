import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  country: DS.attr(),
  rental: DS.hasMany('rental')
});
