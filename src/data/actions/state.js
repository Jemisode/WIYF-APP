export const addIngredient = (ingredient) => {
    return { type: "add", ingredient: ingredient };
};

export const removeIngredient = (ingredient) => {
    return { type: "remove", ingredient: ingredient };
};

export const updateRecipe = (id) => {
    return { type: "update", recipe: id };
};
