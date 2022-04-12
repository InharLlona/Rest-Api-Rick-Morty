import { Character } from './character.api-model';

import axios from 'axios'

export const getCharacter = async (id:string): Promise<Character> => {
  const url =`http://localhost:3000/api/results/${id}`
  const character = (await axios.get(url)).data
  return character;
};

export const saveHotel = async (id:string,character: Character): Promise<boolean> => {
  const url =`http://localhost:3000/api/results/${id}`
  const characters = (await axios.put(url,character))
  return true;
};
