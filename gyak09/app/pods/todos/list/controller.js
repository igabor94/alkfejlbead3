import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTodo(formData) {
            var todo = this.store.createRecord(
                'todo', 
                Object.assign(
                    {
                        status: 'new',
                        date: Date.now().toLocaleString(),
                        megbizott: 'Akárki',
                        description: ''
                    }, 
                    formData
                )
            );
            todo.save();
            $('.modal').modal('hide');
            //this.transitionToRoute('todos.list');
        }
    }
});
