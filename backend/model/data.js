const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    title : {type: String }
    // description :{type :URL}
    

    
});

const Gama = mongoose.model('gama', taskSchema);

module.exports = Gama;