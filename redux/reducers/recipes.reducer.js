import { RECIPES } from "../../data/Dummy";
import { TOGGLE_FAV, SET_FILTERS } from "../types";

const initialState = {
    recipes: RECIPES,
    filtered: RECIPES,
    favorite: []
}

const recipesReducer = (state=initialState, action) => {

    const { type, payload } = action;

    switch(type){
        case TOGGLE_FAV:
            const existingIndex = state.favorite.findIndex(recipe => recipe.id===payload)
            if(existingIndex>-1){
                return {
                    ...state,
                    favorite: state.favorite.filter(recipe => recipe.id!==payload)
                }
            } else {
                const newFav = state.recipes.find(recipe => recipe.id===payload)
                return {
                    ...state,
                    favorite: [newFav, ...state.favorite]
                }
            }
        case SET_FILTERS:
            const {isGlutenFree, isLactoseFree, isVegan, isVegetarian} = payload;
            const filteredRecipes = state.recipes.filter(recipe => {
                if(isGlutenFree && !recipe.isGlutenFree) return false
                if(isLactoseFree && !recipe.isLactoseFree) return false
                if(isVegetarian && !recipe.isVegetarian) return false
                if(isVegan && !recipe.isVegan) return false
                return true
            })
            return{
                ...state,
                filtered: filteredRecipes
            }
        default:
            return state;
    }
}

export default recipesReducer