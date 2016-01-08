import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newError(formData) {
            console.log(formData);
            this.store.createRecord('error', Object.assign({
                date: Date.now().toString(),
                location: 'labor',
                description: 'hiba',
            }, formData));
            this.transitionToRoute('errors.list')
        }
    }
});
