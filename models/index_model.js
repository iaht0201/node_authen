const { mongoose } = require("../main");
const { accountSchema } = require("./account_model");
const { chatSchema } = require("./chat_model");
const { chatHistorySchema } = require("./history_chat_model");
const { todoListSchema } = require("./todo_list");
const Model = mongoose.model;

let Account = Model("Account", accountSchema);

let Chat = Model("Chat", chatSchema);
let ChatHisTory = Model("ChatHisTory", chatHistorySchema);
let TodoList =  Model("TodoList", todoListSchema);
module.exports = { Account, Chat, ChatHisTory , TodoList };
