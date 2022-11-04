const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/users', userController.findAll);

router.get('/:id', userController.findById);

router.post('/user', userController.create);

module.exports = router;
