import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteTodo(todo) {
            //console.log(error);
            todo.deleteRecord();
            todo.save();
        }
    }
});
