const User = require('../models/users');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const ckeckEmail = await User.find({ email }).exec();
        if (ckeckEmail.length) {
            return res
                .status(409)
                .json({ message: 'Email already exists in database' });
        } else {
            const hashPassword = await bcrypt.hash(password, 10);
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email,
                password: hashPassword
            });
            await user.save();
            res.status(201).json('Account Created.');
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.signIn = async (req, res, next) => {
    try {
        const failMessage =
            'The email or password did not match. Please try again.';
        const { email, password } = req.body;
        const user = await User.findOne({ email }).exec();
        try {
            const passwordCheck = await bcrypt.compare(password, user.password);
            if (passwordCheck) {
                const token = jwt.sign({ userId: user._id }, 'privateKey', {
                    expiresIn: '1h'
                });
                return res.status(200).json({
                    email,
                    token
                });
            } else {
                res.status(401).json({ message: failMessage });
            }
        } catch (err) {
            return res.status(401).json({ message: failMessage });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteAccount = async (req, res, next) => {
    try {
        const userId = req.userData.userId;
        await User.deleteOne({ _id: userId }).exec();
        res.status(200).json('Your account has been deleted.');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
