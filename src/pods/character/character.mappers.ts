import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  description: "",
  status: character.status,
  species: character.species,
  gender: character.gender,
  comments:character.comments,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    shortDescription: character.description,
    status: character.status,
    adspecies: character.species,
    gender: character.gender,
    comments:character.comments,
  } as unknown) as apiModel.Character);
