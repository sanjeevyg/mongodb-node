const app = require("../app");


const express = require('express');
const userController =('./../controllers/userController');

const router = express.Router();

router
    .route('/api/v1/users')
    .get(userController.getAllUsers) 
    .post(userController.createUsers)

router
    .route('/api/v1/users/:id')
    .get(userController.getUser) 
    .post(userController.updateUser)
    .delete(userController.deleteUser)