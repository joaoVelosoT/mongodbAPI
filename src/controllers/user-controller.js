const UserService = require("../services/user-service");

const UserController = {
  create: async (req, res) => {
    try {
      const data = {
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
      };

      const user = await UserService.create(data);

      
      return res.status(200).json({
        msg: "User criado com sucesso !",
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro, contate o suporte",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await UserService.getAll();

      if (!users) {
        return res.status(404).json({
          msg: "Nenhum user cadastrado !",
        });
      }

      return res.status(200).json({
        msg: "Users",
        users,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro, contate o suporte",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await UserService.getOne(id);

      if (!user) {
        return res.status(404).json({
          msg: "User não encontrado !",
        });
      }

      return res.status(200).json({
        msg: "User encontrado",
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro, contate o suporte",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const data = {
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
      };

      const user = await UserService.update(id, data);

      if (!user) {
        return res.status(404).json({
          msg: "User não encontrado !",
        });
      }

      return res.status(200).json({
        msg: "User atualizado !",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro, contate o suporte",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await UserService.delete(id);

      if (!user) {
        return res.status(404).json({
          msg: "User não encontrado !",
        });
      }

      return res.status(200).json({
        msg: "User deletado !",
        user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro, contate o suporte",
      });
    }
  },
};

module.exports = UserController;
