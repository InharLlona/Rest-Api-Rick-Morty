import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteHotel } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  // const [check, setCheck] = React.useState("ch");
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteHotel(id);
    loadCharacterCollection();
  };

  // const onCheck = (str) =>{
  //  setCheck(str)
  // }

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onEdit={handleEdit}
      onDelete={handleDelete}
      // onCheck={onCheck}
    />
  );
};
