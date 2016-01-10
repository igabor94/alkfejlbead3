import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        /*
        var a = [{forename:"a"},{forename: "i"}];
        return a;
        */
        return this.store.findAll('user');
    },
    /*
    model() {
        return this.store.findAll('user');
    },
    */
});
