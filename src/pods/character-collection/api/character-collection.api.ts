import { HotelEntityApi } from './character-collection.api-model';
import axios from 'axios'

const url =`http://localhost:3000/api/results`

export const getCharacterCollection = async (): Promise<HotelEntityApi[]> => {
  const characterCollection = (await axios.get(url)).data
  return characterCollection;
};

export const deleteHotel = async (id: string): Promise<boolean> => {
 return true;
 };
