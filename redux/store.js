import { createStore, combineReducers } from 'redux';
import recipesReducer from './reducers/recipes.reducer';

const rootReducer = combineReducers({
    recipe: recipesReducer
})

export const store = createStore(rootReducer);