import Ember from 'ember';
//ez után a login/controller.js fut le
export default Ember.Component.extend({
    users: Ember.Object.create(),
    
    actions: {
        login() {
            let store = this.get('targetObject.store');

            if (!this.validate()) {
                return;
            }
            
            var that = this;
            var forename = this.$('#forename').val();
            var password = this.$('#password').val();
            store.queryRecord('user', { filter: { forename: forename, password: password } }).then(function(person) {
                if(person.length === 0) {
                    that.set('users.forename', 'Hibás adatok');
                } else {
                    that.get('onSave')({
                        login: 1,
                        forename: forename,
                        password: password
                    });
                }
            });
                
    },
    
    reg() {
      let store = this.get('targetObject.store');

       if (!this.validate()) {
           return;
       }
       
       var that = this;
       var forename = this.$('#forename').val();
       var password = this.$('#password').val();
       store.queryRecord('user', { filter: { forename: forename } }).then(function(person) {
           console.log(person);
           if(person.length === 0) {
               that.get('onSave')({
                   login: 0,
                   forename: forename,
                   password : password,
                   role: 0
               });
           } else {
               console.log("ezteljesul");
               that.set('users.forename', 'Foglalt név!');
           }
       });
       
       this.get('onSave')({
           
           forename: this.$('#forename').val(),
           password: this.$('#password').val(),
           role: 0
       });
    }
    
    
    },
    
    validate() {
        var forename = this.$('#forename').val();
        var password = this.$('#password ').val();
        
        if(forename === '' || password === '') {
            this.set('users.forename', forename === '' ? 'Név kitöltése kötelező' : '');
            this.set('users.password', password === '' ? 'Jelszó kitöltése kötelező' : '');
            return false;
        }
        
        return true;
    }

});
