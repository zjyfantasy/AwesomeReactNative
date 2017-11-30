import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducer, Router, Stack, Scene, Actions } from 'react-native-router-flux'
import Home from './containers/Home';
import App from './containers/App';

import reducer from './reducers';
import configureStore from './store/configureStore';

const store = configureStore();
const RouterWithRedux = connect()(Router);
const scenes = Actions.create(
    <Stack key="root">
        <Scene key="home" component={Home} title="Home" />
        <Scene key="counter" component={App} title="counter" />
    </Stack>
);
const Index = () => (
    <Provider store={store}>
        <RouterWithRedux scenes={scenes} />
    </Provider>
)

export default Index