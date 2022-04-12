import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyHotel, Character} from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyHotel());
  const [cities, setCities] = React.useState<Lookup[]>([]);
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiChars = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiChars));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveHotel(id,apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save hotel');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
