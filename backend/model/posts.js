const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    text: {type: String },
    discrption: {type: String },
    para: {type: String },
    // description :{type :URL}
    

    
});

const Posts = mongoose.model('Posts', taskSchema);

module.exports = Posts;