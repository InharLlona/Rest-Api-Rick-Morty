import { HotelEntityApi } from './character-collection.api-model';
import axios from 'axios'

const url =`https://rickandmortyapi.com/api/`

export const getCharacterCollection = async (wth:string): Promise<HotelEntityApi[]> => {
  const characterCollection = (await axios.get(`${url}${wth}`)).data
  return characterCollection;
};

export const deleteHotel = async (id: string): Promise<boolean> => {
 return true;
 };
