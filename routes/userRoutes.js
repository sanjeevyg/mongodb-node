const express = require('express');
const userController =('./../controllers/userController');

const router = express.Router();

router
    .route('/')
    .get(userController.getAllUsers) 
    .post(userController.createUsers)

router
    .route('/:id')
    .get(userController.getUser) 
    .post(userController.updateUser)
    .delete(userController.deleteUser)


module.exports = router;