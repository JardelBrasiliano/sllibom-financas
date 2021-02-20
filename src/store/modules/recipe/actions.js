export const types = {
  RECIPE: {
    REQUEST: '@recipe/RECIPE_REQUEST',
    SUCCESS: '@recipe/RECIPE_SUCCESS',
    FAILURE: '@recipe/RECIPE_FAILURE',
  },
};

export const submitRecipeRequest = (data, token, shippingDay) => ({
  type: types.RECIPE.REQUEST,
  payload: { data, token, shippingDay },
});

export const submitRecipeSuccess = () => ({
  type: types.RECIPE.SUCCESS,
});

export const submitRecipeFailure = () => ({
  type: types.RECIPE.FAILURE,
});
