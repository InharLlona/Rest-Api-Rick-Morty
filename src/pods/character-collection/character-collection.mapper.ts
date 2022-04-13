import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (character: apiModel.intChar): viewModel.CharacterEntityVm => ({
  id: character.id,
  picture: character.image,
  name: character.name,
  description: character.gender,
  address: character.created,
});

export const mapLocationFromApiToVm = (location: apiModel.intChar): viewModel.LocationEntityVm => ({
  id: location.id,
  name: location.name,
});

export const mapEpisodeFromApiToVm = (episode: apiModel.intChar): viewModel.EpisodeEntityVm => ({
  id: episode.id,
  name: episode.name,
});


