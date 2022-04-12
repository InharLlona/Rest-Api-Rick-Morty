import { Character } from './character.api-model';
import { Lookup } from 'common/models';
// import { mockCities, mockHotelCollection } from './character.mock-data';
import axios from 'axios'
import {switchRoutes} from '../../../core/router/routes'

export const getCharacter = async (id: string): Promise<Character> => {
  // return mockHotelCollection.find((h) => h.id === id);

  // const character = (await axios.get(`${switchRoutes.characterCollection}/${id}`)).data
  const character = (await axios.get(`https://rickandmortyapi.com/api/character/${id}`)).data

  return character;
};

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

export const saveHotel = async (character: Character): Promise<boolean> => {
  return true;
};
