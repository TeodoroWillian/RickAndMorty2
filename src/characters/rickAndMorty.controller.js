const characterService = require("../services/rickAndMorty.service");
const mongoose = require("mongoose");

const findAllCharactersController = async (req, res) => {
  const allCharacters = await characterService.findAllCharactersService();
  if (allCharacters.length == 0) {
    return res
      .status(404)
      .send({ message: "Não existe Personagem cadastrado" });
  }
  res.send(allCharacters);
};

const findByIdCharacterController = async (req, res) => {
  const idParam = req.params.id;

  const chosenCharacter = await characterService.findByIDCharacterService(
    idParam
  );
  if (!chosenCharacter) {
    return res.status(404).send({ message: "Personagem Não Encontrada" });
  }
  res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
  const character = req.body;
  const newCharacter = await characterService.createCharacterService(character);
  res.status(201).send(newCharacter);
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const editCharacter = req.body;
  const updatedCharacter = await characterService.updateCharacterService(
    idParam,
    editCharacter
  );
  res.send(updatedCharacter);
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;

  await characterService.deleteCharacterService(idParam);
  res.send({ message: "Personagem deletado com sucesso" });
};
module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};