const { jwt, bcrypt } = require("../main");
const { Account } = require("../models/index_model");

const accountCountroller = {
  // create account user
  createAccount: async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res
          .status(400)
          .json({ message: "Username và password là bắt buộc!" });
      }
      const existingUser = await Account.findOne({
        username,
      });
      if (existingUser) {
        return res.status(400).json({ message: "Người dùng đã tồn tại!" });
      }
      // Mã hóa mật khẩu
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new Account({
        username: username,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(200).json({ message: "Tạo tài khoản thành công!" });
    } catch (error) {
      console.error("Lỗi:", error);
      res.status(500).json(error);
    }
  },

  handleLogin: async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res
          .status(400)
          .json({ message: "Username và password là bắt buộc!" });
      }
      const account = await Account.findOne({
        username: username,
      });
      console.log("password" + password);

      if (!account) {
        return res.status(400).json({ message: "Tài khoản không tồn tại" });
      } else {
        const isPasswordValid = await bcrypt.compare(
          password,
          account.password
        );
        console.log("password" + account.password);
        console.log(isPasswordValid);
        if (!isPasswordValid) {
          return res.status(400).json({ message: "Mật khẩu không đúng" });
        }
      }

      var token = jwt.sign(
        {
          _id: account._id,
        },
        "mk"
      );
      res.cookie("token", token, { maxAge: 3600000 });

      res.status(200).json({ message: "Đăng nhập thành công!", token: token });
    } catch (error) {
      console.error("Lỗi:", error);
      res.status(500).json(error);
    }
  },
  handleLogout: async (req, res) => {
    // reset token
   try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "Đăng xuất thành công!", token: token });
   } catch (error) {
    console.error("Lỗi:", error);
    res.status(500).json(error);
   }
  },
};

module.exports = { accountCountroller };
