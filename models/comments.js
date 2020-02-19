var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./Util');
var commentsSchema = new Schema({
user_name: {type: String},
comment: {type: String},
date_created : {type: Date, default: new Date()},
up_votes: {type: Number, default : 0},
down_votes: {type: Number, default : 0}
});
module.exports = mongoose.model('Comment', commentsSchema);
module.exports = mongoose.model('LeaderBoard', commentsSchema);