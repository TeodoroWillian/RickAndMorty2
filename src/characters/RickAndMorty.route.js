const route = require("express").Router();
const controllerCharacters = require("../controllers/rickAndMorty.controller");
const {
  validId,
  validObjectBody,
} = require("../middlewares/rickAndMorty.middleware");

route.get("/all-characters", controllerCharacters.findAllCharactersController);
route.get(
  "/one-character/:id",
  validId,
  controllerCharacters.findByIdCharacterController
);
route.post(
  "/create-character",
  validObjectBody,
  controllerCharacters.createCharacterController
);
route.put(
  "/update-character/:id",
  validId,
  validObjectBody,
  controllerCharacters.updateCharacterController
);
route.delete(
  "/delete-character/:id",
  validId,
  controllerCharacters.deleteCharacterController
);

module.exports = route;