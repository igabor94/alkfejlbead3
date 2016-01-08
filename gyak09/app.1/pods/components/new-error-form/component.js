import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submit() {
            //console.log('faintos szoveg')
            this.get('onSave')({
                location: this.$('#helyszin').val(),
                description: this.$('#leiras').val(),
            });
        }
    }
});
