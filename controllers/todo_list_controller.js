const { TodoList } = require("../models/index_model");

const todoListControllelr = {
  // create account user
  createTodo: async (req, res) => {
    try {
      const { title } = req.body;
        const todo = new TodoList({
          title: title,
        });
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
      res.status(400).json({ message: err.message });
    }
  },

 getAllTodo: async (req, res) => {
    try {
      const todos = await TodoList.find();
      res.status(201).json(todos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
 // get to do by id 
 getTodo : async (req, res) => {
    try {
        const todos = await TodoList.findById(req.params.id);
        res.status(201).json(todos);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
 } , 
 // update to do by id
 updateTodo: async (req, res) => {
    try {
      // populate get infor books ra
      const todo = await TodoList.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      if (todo) {
        res.status(201).json(todo);
      } else {
        res.status(404).json("Lỗi");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },


  deleteTodo: async (req, res) => {
    try {
      // xoa id author ra khoi book, vì không phải mảng nên không dùng pull
      const todo = await TodoList.findByIdAndDelete(req.params.id);

      if (todo) {
        res.status(201).json(todo);
      } else {
        res.status(404).json({ message: "Deleted fail!" });
      }
    } catch (error) {
      console.error("Error getting author:", error);
      res.status(500).json(error);
    }
  },
};

module.exports = { todoListControllelr };
