import { TOGGLE_FAV, SET_FILTERS } from "../types"

export const toggleFav = recipeId => {
    return {
        type: TOGGLE_FAV,
        payload: recipeId
    }
}

export const setFilters = filters => {
    return{
        type: SET_FILTERS,
        payload: filters
    }
}