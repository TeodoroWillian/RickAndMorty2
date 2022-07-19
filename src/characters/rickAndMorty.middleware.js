const mongoose = require("mongoose");

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID Inválido" });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const character = req.body;

  if (
    !character ||
    !character.name ||
    !character.status ||
    !character.species ||
    !character.type ||
    !character.gender ||
    !character.image
  ) {
    return res
      .status(400)
      .send({ message: "envie todos os campos do Personagem!" });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};