const { mongoose } = require("../main");
const Schema = mongoose.Schema;
const chatSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  
  timestamp: { type: Date, default: Date.now },
});
module.exports = { chatSchema };
