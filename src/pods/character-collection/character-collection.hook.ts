import * as React from 'react';
import { CharacterEntityVm , LocationEntityVm ,EpisodeEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm , mapEpisodeFromApiToVm , mapLocationFromApiToVm} from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = (wth:string) => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[] | LocationEntityVm[] | EpisodeEntityVm[]>([]);

  const loadCharacterCollection = () => {
    getCharacterCollection(wth).then((result) =>{
       if(wth=="character"){
        setCharacterCollection(mapToCollection(result.results, mapFromApiToVm))}
       else if (wth=="location"){
         setCharacterCollection(mapToCollection(result.results, mapLocationFromApiToVm))}
       else{
        setCharacterCollection(mapToCollection(result.results, mapEpisodeFromApiToVm))}  
    })}
  return { characterCollection, loadCharacterCollection };
  
}
