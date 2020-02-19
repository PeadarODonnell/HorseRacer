var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./Util');

var usersSchema = new Schema({
    user_name: {type: String},
    highscore: {type: Number}
});

module.exports = mongoose.model('User', usersSchema);