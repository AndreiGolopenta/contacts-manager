const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, require: true },
    email: { type: String, require: true },
    job: { type: String, require: false },
    location: { type: String, require: false },
    tagSelect: { type: String, require: false },
    facebook: { type: String, require: false },
    github: { type: String, require: false },
    twitter: { type: String, require: false },
    linkedin: { type: String, require: false }
});

module.exports = mongoose.model('Contact', contactSchema);
