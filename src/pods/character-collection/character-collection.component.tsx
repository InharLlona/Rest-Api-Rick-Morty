import * as React from 'react';
import { CharacterEntityVm , LocationEntityVm , EpisodeEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import Pagination from "material-ui-flat-pagination";

interface Props {
  characterCollection: CharacterEntityVm[] | LocationEntityVm [] | EpisodeEntityVm [] ;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCheck: (str: string) => void;
  searchingDetails:string;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (props) => {

  const { characterCollection, onEdit, onDelete, onCheck, searchingDetails} = props;

  const [offset, setOffset] = React.useState(0);
  const [perPage] = React.useState(5);
  const [sliced, setSliced] = React.useState<CharacterEntityVm[]>([]);
  const [sliced1, setSliced1] = React.useState<CharacterEntityVm[]>([]);
  const [charName, setCharName] = React.useState("");
  const [filtered, setFiltered] = React.useState(false);
 
  React.useEffect(() => {
    //let slice = []
    if(filtered){
      ajustsliced(sliced1.slice(offset, offset + perPage))
    }else{
      ajustsliced(characterCollection.slice(offset, offset + perPage))
    }
  }, [characterCollection, offset, sliced1])

  React.useEffect(() => {
    const slice1 = characterCollection.filter((char)=>char.name.includes(charName))
    ajustsliced1(slice1)
    if(charName){setFiltered(true)}
    else{setFiltered(false)}
  }, [charName])

  const ajustsliced = dato => {
  setSliced(dato)
  }

  const ajustsliced1 = dato => {
    setSliced1(dato)
  }

  const handleClick = (e, offset, page) => {
    setOffset((page-1)*perPage)
  };

  React.useEffect(() => {
    setCharName("");
  }, [searchingDetails])

  return (
    <div className={classes.root}>
      <div>
        <div>
          <button className={classes.button} onClick={()=>onCheck("character")}>Characters</button> 
          <button className={classes.button} onClick={()=>onCheck("location")}>Places</button> 
          <button className={classes.button} onClick={()=>onCheck("episode")}>Episodes</button> 
        </div>
      <input value={charName} onChange={(e) => setCharName(e.target.value)} placeholder="Filter by name"/>
      </div>
      <ul className={classes.list}>
        {sliced.map((char) => (
          <li key={char.id}>
            <CharacterCard char={char} onEdit={onEdit} onDelete={onDelete} editCancelled={searchingDetails} />
          </li>
        ))}
      </ul>
      <div>
      <Pagination 
        limit={perPage}
        offset={offset}
        total={(filtered)?sliced1.length:characterCollection.length}
        onClick={(event: object, offset: number, page: number)=>handleClick(event,offset, page)}
        nextPageLabel={'next'}
        previousPageLabel={'prev'}
        innerButtonCount={2}
        outerButtonCount={2}/>
    </div> 
    </div>
  );
};
