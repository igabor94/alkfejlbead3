import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTodo(formData) {
            console.log(formData);
            // formData.status = 'new';
            // formData.date = Date.now().toLocaleString();
            var todo = this.store.createRecord(
                'todo', 
                Object.assign(
                    {
                        status: 'new',
                        date: new Date().toString(),
                        megbizott: 'Akárki',
                        description: ''
                    }, 
                    formData
                )
            );
            todo.save();
            this.transitionToRoute('todos.list');
        }
    }
});
