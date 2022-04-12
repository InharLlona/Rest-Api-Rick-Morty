export interface Character {
  id: string;
  name: string;
  description: string;
  species: string;
  status: string;
  gender: string;
}

export const createEmptyHotel = (): Character => ({
  id: '',
  name: '',
  description: '',
  species: '',
  status: '',
  gender: '',
});
