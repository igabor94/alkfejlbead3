import DS from 'ember-data';

const UserModel = DS.Model.extend({
  password: DS.attr('string'),
  forename: DS.attr('string'),
  role: DS.attr('number'),
});


export default UserModel;