const mongoose = require('mongoose');
const { Schema } = mongoose;


const ItemSchema = new Schema({
    name: String,
    color: String,
    quantity: Number,
    date: Date
}, { timestamps: true })

module.exports = mongoose.model('item', ItemSchema)