const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    guildId: { type: String, required: true },
    balance: { type: Number, default: 0 },
    lastDaily: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
