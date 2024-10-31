const UserValidate = (req, res, next) => {
  try {
    const { nome, email, idade } = req.body;

    if (!nome || typeof nome != "string") {
      return res.status(400).json({
        msg: "Dados invalidos",
      });
    }

    if (!email || typeof email != "string") {
      return res.status(400).json({
        msg: "Dados invalidos",
      });
    }

    if (!idade || typeof idade != "string") {
      return res.status(400).json({
        msg: "Dados invalidos",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Erro, contate o suporte",
    });
  }
};

const UserValidateID = (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id || typeof id != "string") {
      return res.status(400).json({
        msg: "Dados invalidos",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Erro, contate o suporte",
    });
  }
};

module.exports = { UserValidate, UserValidateID };
