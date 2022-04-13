import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteHotel } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {

  const [wth, setWht] = React.useState("character");
  const { characterCollection, loadCharacterCollection } = useCharacterCollection(wth);
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, [wth]);

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteHotel(id);
    loadCharacterCollection();
  };

  const onCheck = (str) =>{
    setWht(str)
  }

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onCheck={onCheck}
      searchingDetails={wth}
    />
  );
};
