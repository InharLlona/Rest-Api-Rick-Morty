import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
} from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" /> 
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent name="species" label="Species" />
          <TextFieldComponent name="gender" label="Gender" />
          <TextFieldComponent name="comments" label="Comments" />
          <TextFieldComponent
            name="description"
            label="Description"
            multiline={true}
            rows={3}
            rowsMax={5}
          />
          <span><b>Episodes this charater took part</b></span>
          <ul>
            {character.episode.map((char) => (
            <a href={char}><li key={char}>{char}</li></a>
            ))}
          </ul>
          <Button type="submit" variant="contained" color="primary" >
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
