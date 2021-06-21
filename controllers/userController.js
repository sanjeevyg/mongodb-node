const User = require('./../models/userModel.js');

exports.getAllUsers = async (req, res) => {
    try { const user = await User.find()
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined',
        data: {
            user
        }
    })} catch(err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent!'
    }
    
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