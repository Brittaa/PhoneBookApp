const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
        name: String,
        phone: Number
});

mongoose.model('Phone', phoneSchema);
