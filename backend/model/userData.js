const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    title : {type: String },
    text: {type: String },
    discrption: {type: String },
    para: {type: String },
});

const Data = mongoose.model('Data', taskSchema);

module.exports = Data;