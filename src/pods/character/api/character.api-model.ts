export interface Character {
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

interface intNameUrl{
  name: string;
  url: string;
}

