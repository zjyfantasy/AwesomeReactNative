import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducer, Router, Stack, Scene } from 'react-native-router-flux'
import Home from './containers/Home';
import reducer from './reducers';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};


const finalCreateStore = applyMiddleware(thunk)(createStore);
let store = finalCreateStore(reducer);
const Index = () => (
    <Provider store={store}>
        <Router
            createReducer={reducerCreate}
        >
            <Stack key="root" titleStyle={{ alignSelf: 'center' }}>
                <Scene key="home" component={Home} title="Home" />
            </Stack>
        </Router>
    </Provider>
)

export default Index