const express = require('express');
const router = express.Router();
const{check, validationResult} = require('express-validator');
const Todo = require('../models/Todo');




router.post('/',[
    check('text', 'укажите что нужно сделать').not().isEmpty()
], async (req,res)=> {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    try {

        const newtodo = new Todo({
            text: req.body.text
        });

        const todo = await newtodo.save();

        res.json(todo);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/',async(req,res) => {
    try {
        const todo = await Todo.find().sort({ date:-1});
        res.json(todo);
    } catch(err) {
        console.error(ERR.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
