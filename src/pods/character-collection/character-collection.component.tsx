import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import Pagination from "material-ui-flat-pagination";

interface Props {
  characterCollection: CharacterEntityVm[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  // onCheck: (str: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (props) => {

  const { characterCollection, onEdit, onDelete} = props;

  const [offset, setOffset] = React.useState(0);
  const [perPage] = React.useState(5);
  const [sliced, setSliced] = React.useState<CharacterEntityVm[]>([]);
  const [sliced1, setSliced1] = React.useState<CharacterEntityVm[]>([]);
  const [charName, setCharName] = React.useState("");
  const [filtered, setFiltered] = React.useState(false);
  // const [bringCharacters, setBringCharacters] = React.useState(true);
  // const [bringLocation, setBringLocations] = React.useState(false);
  // const [bringEpisodes, setBringEpisodes] = React.useState(false);

  // const changePriorities = (str:string) =>{
  //   switch(str){
  //     case "ch":
  //       setBringCharacters(true)
  //       setBringLocations(false)
  //       setBringEpisodes(false)
  //       break;
  //     case "pl":
  //       setBringCharacters(false)
  //       setBringLocations(true)
  //       setBringEpisodes(false)
  //       break;
  //     case "ep":
  //       setBringCharacters(false)
  //       setBringLocations(false)
  //       setBringEpisodes(true)
  //       break;
  //   }
  // }

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

  return (
    <div className={classes.root}>
      <div>
        {/* <div>
          <button className={classes.button} onClick={changePriorities("ch")}>Characters</button> 
          <button className={classes.button} onClick={changePriorities("pl")}>Places</button> 
          <button className={classes.button} onClick={changePriorities("ep")}>Episodes</button> 
        </div> */}
      <input value={charName} onChange={(e) => setCharName(e.target.value)} placeholder="Filter by name"/>
      </div>
      <ul className={classes.list}>
        {sliced.map((char) => (
          <li key={char.id}>
            <CharacterCard char={char} onEdit={onEdit} onDelete={onDelete} />
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
