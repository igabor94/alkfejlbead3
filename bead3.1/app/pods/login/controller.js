import Ember from 'ember';
//előbb e login-form/component fut le, aztán ez.
export default Ember.Controller.extend({
    actions: {
        newUser(formData) {
            if(formData.login !== 1) {
            {
                var user = this.store.createRecord(
                    'user', 
                    Object.assign(
                        {
                            password: '',
                            forename: '',
                            role: 0,
                            todos: []
                        }, 
                        formData
                    )
                );
                user.save();
                $('.modal').modal('hide');
                this.transitionToRoute('todos.list');
            }
        }
    }
    }
});
