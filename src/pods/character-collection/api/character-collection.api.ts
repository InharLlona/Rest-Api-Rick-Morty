import { HotelEntityApi } from './character-collection.api-model';
// import { mockHotelCollection } from './hotel-collection.mock-data';
import axios from 'axios'
import {switchRoutes} from '../../../core/router/routes'

// let hotelCollection = [...mockHotelCollection];

export const getCharacterCollection = async (): Promise<HotelEntityApi[]> => {

  const characterCollection = (await axios.get("https://rickandmortyapi.com/api/character")).data

  return characterCollection;
};

export const deleteHotel = async (id: string): Promise<boolean> => {
//   hotelCollection = hotelCollection.filter((h) => h.id !== id);
 return true;
 };
