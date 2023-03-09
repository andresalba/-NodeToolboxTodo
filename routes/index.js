const router = require('express').Router();
const Todo = require('../models/Todo');

// Routes here
router.get('/', async(req, res) => {
    const allTodo = await Todo.find();
    res.render('index', { todo: allTodo });
});

module.exports = router;
