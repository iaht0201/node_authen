const { mongoose } = require("../main");
const Schema = mongoose.Schema;
const todoListSchema = new Schema({
  title: {
    type: String,
    require: true
  },
});
module.exports = { todoListSchema };
