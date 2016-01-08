import DS from 'ember-data';

const ErrorModel = DS.Model.extend({
  date: DS.attr(),
  location: DS.attr(),
  description: DS.attr(),
});

ErrorModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            date: '1212-12-12',
            location: 'pc6',
            description: 'rossz'
        },
        {
            id: 2,
            date: '1212-12-12',
            location: 'pc7',
            description: 'még rosszabb'
        },
        
    ] 
});

export default ErrorModel;
