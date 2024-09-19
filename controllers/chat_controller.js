const { jwt } = require("../main");
const { Chat, ChatHisTory, Account } = require("../models/index_model");

const chatControllers = {
  // add author
  saveHistoryChat: async (req, res) => {
    try {
      const token = req.headers.authorization.split("")[1];
      if (!token) {
        return res
          .status(401)
          .json({ message: "Authentication token is missing!" });
      }
      // giai ma token
      const decodedToken = jwt.verify(token, "mk");
      const userId = decodedToken._id;
      const chats = req.body.chats;
      if (!Array.isArray(chats) || chats.length === 0) {
        return res.status(400).json({
          message: "Chats list is required and should be non-empty array.",
        });
      }

      // Tìm hoặc tạo mới lịch sử chat cho người dùng
      let userChat = await ChatHisTory.findOne({ userId: userId });
      if (!userChat) {
        userChat = new ChatHisTory({ userId: userId, histroy: [] });
      }
      //
      for (const chat of chats) {
        const { message, username } = chat;
        console.log(chat);
        userChat.histroy.push(chat);
      }
      console.log(userChat);
      // Lưu lịch sử chat
      const savedChat = await userChat.save();

      res.status(200).json(savedChat);
    } catch (error) {
      console.error("Error saving chat history:", error);
      res.status(500).json(error);
    }
  },
  // get author
  //   getAllBook: async (req, res) => {
  //     try {
  //       const book = await Book.find();
  //       res.status(200).json(book);
  //     } catch (error) {
  //       console.error("Error getting author:", error);
  //       res.status(500).json(error);
  //     }
  //   },
  //   getABook: async (req, res) => {
  //     try {
  //       const book = await Book.findById(req.params.id).populate("author");
  //       res.status(200).json(book);
  //     } catch (error) {
  //       console.error("Error getting book:", error);
  //       res.status(500).json(error);
  //     }
  //   },
  //   // UPDATE BOOK
  //   updateBook: async (req, res) => {
  //     try {
  //       // co the dung findByIdAndUpdate
  //       // cach 1
  //       // const book = await Book.findById(req.params.id) ;
  //       // await book.updateOne({$set: req.body});
  //       const book = await Book.findByIdAndUpdate(
  //         req.params.id,
  //         { $set: req.body },
  //         { new: true }
  //       );
  //       if (book) {
  //         res.status(200).json("Updated successfuily!");
  //       } else {
  //         res.status(404).json("Not found book!");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500).json(error);
  //     }
  //   },
  //   // deleteBook
  //   deleteBook: async (req, res) => {
  //     try {
  //       // Xóa ID sách từ tất cả các tài liệu tác giả có chứa sách này
  //       // vi books la array nen su dụng pull
  //       await Author.updateMany(
  //         { books: req.params.id },
  //         { $pull: { books: req.params.id } }
  //       );

  //       // Xóa sách khỏi cơ sở dữ liệu
  //       const book = await Book.findByIdAndRemove(req.params.id);

  //       if (book) {
  //         res.status(200).json({ message: "Deleted successfully!" });
  //       } else {
  //         res.status(404).json({ message: "Book not found" });
  //       }
  //     } catch (error) {
  //       console.error("Error deleting book:", error);
  //       res.status(500).json(error);
  //     }
  //   },
};
module.exports = { chatControllers };
