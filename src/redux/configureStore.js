import { createStore } from 'redux';
import { Reducer, initState } from './reducer'

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initState, // our initialState
    );

    return store;
}