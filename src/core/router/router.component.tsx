import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root]}
          component={CharacterCollectionScene}
        />
         <Route
          exact={true}
          path={switchRoutes.characterCollection}
          component={CharacterCollectionScene}
        /> 
        <Route
          exact={false}
          path={switchRoutes.editCharacter}
          component={CharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
