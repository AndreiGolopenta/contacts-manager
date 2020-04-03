const Contact = require('../models/contact');
const mongoose = require('mongoose');

const selection =
    '_id name email job location tagSelect facebook github twitter linkedin';

exports.createContact = async (req, res, next) => {
    try {
        const createdContact = new Contact({
            _id: new mongoose.Types.ObjectId(),
            user: req.userData.userId,
            ...req.body
        });
        await createdContact.save();
        const response = await Contact.findOne({ _id: createdContact._id })
            .select(selection)
            .exec();
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getContactsForUser = async (req, res, next) => {
    try {
        const user = req.userData.userId;
        const response = await Contact.find({ user })
            .select(selection)
            .exec();
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const update = req.body;
        await Contact.update({ _id: id }, { $set: update }).exec();
        const response = await Contact.findOne({ _id: id })
            .select(selection)
            .exec();
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Contact.remove({ _id: id }).exec();
        res.status(200).json(id);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
