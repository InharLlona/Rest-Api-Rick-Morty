
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

export interface intLoc{
      id: string;
      name:string;
      type:string;
      dimension:string;
      residents: string[];
      url: string;
      created: string;
}

export interface LocationEntityApi {
      info:intInfo 
      results:intLoc[]
}

export interface intEpi{
      id: string;
      name:string;
      air_date:string;
      episode:string;
      characters: string[];
      url: string;
      created: string;
}

export interface EpisodeEntityApi {
      info:intInfo
      results:intEpi[]
}


