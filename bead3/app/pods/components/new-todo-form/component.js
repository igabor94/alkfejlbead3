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
                status: this.$('#status').val(),
                date: new Date().toString()
            });
        }
    },
    
    validate() {
        var megbizott = this.$('#megbizott').val();
        var description = this.$('#leiras').val();
        var status = this.$('#status').val();
        
        this.set('todos.description', description === '' ? 'Feladat leírás kötelező' : '');
        this.set('todos.megbizott', megbizott === '' ? 'Megbízott kitöltése kötelező' : '');
        this.set('todos.status', status === '' ? 'Status kitöltése kötelező' : '');
        
        return this.get('todos.description') === '' && this.get('todos.megbizott') === '' && this.get('todos.status') === '' ;
    }
});
