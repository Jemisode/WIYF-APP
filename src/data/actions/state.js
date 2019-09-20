export const addIngredient = (id, name) => {
    return { type: "add", id: id, name: name };
};

export const removeIngredient = (id) => {
    return { type: "remove", id: id };
};

export const updateRecipe = (id) => {
    return { type: "update", recipe: id };
};
