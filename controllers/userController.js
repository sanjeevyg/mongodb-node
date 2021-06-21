const User = require('./../models/userModel.js');

exports.getAllUsers = (req, res) => {
    const user = User.find()
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined',
        data: {
            user
        }
    })
}

exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined',
        data: {

        }
    })
}

exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}
exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}