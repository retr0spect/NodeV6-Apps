const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '584216f04e03b62b48bee81d';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todos) => {
    if (!todos) {
        return console.log('Id not found');
    }
    console.log('One todo', todos);
});

Todo.findById(id).then((todos => {
    if (!todos) {
        return console.log('Id not found');
    }
    console.log('Todos by id', todos);
}));