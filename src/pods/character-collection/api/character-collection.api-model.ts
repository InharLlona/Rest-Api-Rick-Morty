
interface intNameUrl{
    name: string;
    url: string;
}

interface intInfo{
      count: number;
      next:string;
      pages:number; 
      prev: null;
}

export interface intChar{
      id: string;
      name:string;
      status:string; 
      species: string;
      type:string;
      gender:string;
      origin: intNameUrl;
      location:intNameUrl; 
      image:string;
      episode: string[];
      url: string;
      created: string;
}

export interface HotelEntityApi {
      info:intInfo 
      results:intChar[]
}
