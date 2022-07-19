const Character = require("../models/Personagem");

const findAllCharactersService = async () => {
  const allCharacters = await Character.find();
  return allCharacters;
};

const findByIdCharacterService = async (idParam) => {
  const oneCharacter = await Character.findById(idParam);
  return oneCharacter;
};

const createCharacterService = async (newCharacter) => {
  const createdCharacter = await Character.create(newCharacter);
  return createdCharacter;
};

const updateCharacterService = async (idParam, editCharacter) => {
  const updateCharacter = await Character.findByIdAndUpdate(
    idParam,
    editCharacter
  );
  return updateCharacter;
};

const deleteCharacterService = async (idParam) => {
  return await Character.findByIdAndDelete(idParam);
};
module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};