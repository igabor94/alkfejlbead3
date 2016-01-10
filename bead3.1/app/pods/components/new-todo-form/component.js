import Ember from 'ember';

export default Ember.Component.extend({
    todos: Ember.Object.create(),
    
    actions: {
        submit() {
            
            if (!this.validate()) {
                return;
            }
            
            
            this.get('onSave')({
                megbizott: this.$('#megbizott').val(),
                description: this.$('#leiras').val(),
                status: 'Uj',
                date: new Date().toString()
            });
        }
    },
    
    validate() {
        var megbizott = this.$('#megbizott').val();
        var description = this.$('#leiras').val();
        
        this.set('todos.description', description === '' ? 'Feladat leírás kötelező' : '');
        this.set('todos.megbizott', megbizott === '' ? 'Megbízott kitöltése kötelező' : '');
        
        return this.get('todos.description') === '' &&
               this.get('todos.megbizott') === '';
    }
});
