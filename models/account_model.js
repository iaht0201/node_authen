const { mongoose } = require("../main");
const Schema = mongoose.Schema;
const accountSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
module.exports = { accountSchema };
