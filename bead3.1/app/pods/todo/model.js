import DS from 'ember-data';

const TodoModel = DS.Model.extend({
  megbizott: DS.belongsTo('user', { async: true }),
  description: DS.attr('string'),
  date: DS.attr('string'),
  status: DS.attr('string'),
});

/*
TodoModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            date: '2021.12.12',
            location: 'pc1',
            description: 'rossz',
            status: 'new',
        },    
        {
            id: 2,
            date: '2012.12.12',
            location: 'pc2',
            description: 'rossz',
            status: 'assigned',
        },    
        {
            id: 3,
            date: '2015.12.12',
            location: 'pc9',
            description: 'rossz',
            status: 'success',
        },    
    ]
});
*/

export default TodoModel;