import initial from './initial';

const addIngredient = (state, { ingredient }) => {
    return {
        ...state,
        chosenIngredients: [...state.chosenIngredients, ingredient], 
    };
};

const reducer = (state, action) => {
    switch (action.type) { 
        case "change": return addIngredient(state, action);
        default: return state;
    }; 
};

export default reducer;