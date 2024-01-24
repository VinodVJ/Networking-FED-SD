// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.all('/',(req, res) => {
    res.send('Im testing server');
})

const todo = [
    {
        id: 1,
        title: 'Task 1',
        completed: false
    },
    {
        id: 2,
        title: 'Task 2',
        completed: true
    }
]

//READ
app.get('/todo', (req, res) => {
    res.json(todo);
})

//CREATE
app.post('/todo', (req, res) => {
    const newTodo = req.body;
    todo.push(newTodo);
    res.json({
        message: 'New todo task added'
    });
})

//Update
app.put('/todo/:id', (req, res) => {
    const newTodo = req.body;
    const todoId = Number(req.params.id);
    const todoIndex = todo.findIndex(td => td.id === todoId);
    if(todoIndex !== -1 ){
        todo[todoIndex] = {
            id: todoId,
            ...newTodo
        }
    }
    res.json( {
        message: 'todo updates sucessfully'
    });
});

//DELETE
app.delete('/todo/:id', (req, res) => {
    const todoId = Number(req.params.id);
    const todoIndex = todo.findIndex(td => td.id === todoId);
    if(todoIndex !== -1 ){
        todo.splice(todoIndex, 1);
    }
    res.json( {
        message: 'todo Deleted sucessfully'
    });
});


const port = 5111;
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})