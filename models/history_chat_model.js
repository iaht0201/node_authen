const { mongoose } = require("../main");
const Schema = mongoose.Schema;
const chatHistorySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "Account", required: true },
  histroy: [
    {
      username: String,
      message: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});
module.exports = { chatHistorySchema };
