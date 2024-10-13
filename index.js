const { connectToDatabase } = require("./db/connect_database");
const { app, bodyParser, cors, morgan } = require("./main");
const accountRouter = require("./router/account_router");
const chatRouter = require("./router/chat_router");
const todoRouter = require("./router/todo_router");

const geminiRouter = require("./router/gemini_router");
connectToDatabase();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));
// author
// app.use("/v1/author", authorRoute);

app.use("/api/account", accountRouter);
app.use("/generate", geminiRouter);
app.use("/message" , chatRouter) ;
app.use("/todo" , todoRouter) ;


let portCurrent = process.env.PORT;
app.listen(portCurrent, function () {
  console.log("Listening on port " + portCurrent); //Listening on port 8888
});
