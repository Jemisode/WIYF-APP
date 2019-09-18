export const addIngredient = (ingredient) => {
    return { type: "add", ingredient: ingredient };
};

export const removeIngredient = (ingredient) => {
    return { type: "remove", ingredient: ingredient };
};
