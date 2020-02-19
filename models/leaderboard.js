var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./Util');

var leaderboardSchema = new Schema({
userName: {type: String},
highScore: {type: Number,
min: 0,
required: [true, 'what happened?']}
});
module.exports = mongoose.model('Leaderboard', leaderboardSchema);