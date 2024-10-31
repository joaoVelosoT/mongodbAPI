const User = require("../models/User");

const UserService = {
  create: async (data) => {
    try {
      return await User.create(data);
    } catch (error) {
      console.error(error);
      throw new Error("Erro, contate o suporte");
    }
  },
  getAll: async () => {
    try {
      const users = await User.find();

      if (users.length === 0) {
        return null;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Erro, contate o suporte");
    }
  },
  getOne: async (id) => {
    try {
      const user = await User.findById(id);

      if (!user) {
        return null;
      }

      return user;
    } catch (error) {
      console.error(error);
      throw new Error("Erro, contate o suporte");
    }
  },
  update: async (id, data) => {
    try {
      const user = await User.findById(id);

      if (!user) {
        return null;
      }

      return await user.updateOne(data);
    } catch (error) {
      console.error(error);
      throw new Error("Erro, contate o suporte");
    }
  },
  delete: async () => {
    try {
      const user = await User.findById(id);

      if (!user) {
        return null;
      }

      return user.deleteOne();
    } catch (error) {
      console.error(error);
      throw new Error("Erro, contate o suporte");
    }
  },
};

module.exports = UserService;
