export const types = {
  RECIPE_SUBMIT: {
    REQUEST: '@recipe/RECIPE_SUBMIT_REQUEST',
    SUCCESS: '@recipe/RECIPE_SUBMIT_SUCCESS',
    FAILURE: '@recipe/RECIPE_SUBMIT_FAILURE',
  },
  RECIPE_SEARCH: {
    REQUEST: '@recipe/RECIPE_SEARCH_REQUEST',
    SUCCESS: '@recipe/RECIPE_SEARCH_SUCCESS',
    FAILURE: '@recipe/RECIPE_SEARCH_FAILURE',
  },
  RECIPE_REMOVE: {
    REQUEST: '@recipe/RECIPE_REMOVE_REQUEST',
    SUCCESS: '@recipe/RECIPE_REMOVE_SUCCESS',
    FAILURE: '@recipe/RECIPE_REMOVE_FAILURE',
  },
};
// SUBMIT
export const submitRecipeRequest = (data, token, shippingDay) => ({
  type: types.RECIPE_SUBMIT.REQUEST,
  payload: { data, token, shippingDay },
});
export const submitRecipeSuccess = () => ({
  type: types.RECIPE_SUBMIT.SUCCESS,
});
export const submitRecipeFailure = () => ({
  type: types.RECIPE_SUBMIT.FAILURE,
});
// SEARCH
export const searchRecipeRequest = (filter, token) => ({
  type: types.RECIPE_SEARCH.REQUEST,
  payload: { filter, token },
});
export const searchRecipeSuccess = (list) => ({
  type: types.RECIPE_SEARCH.SUCCESS,
  payload: { list },
});
export const searchRecipeFailure = () => ({
  type: types.RECIPE_SEARCH.FAILURE,
});
// REMOVE
export const removeRecipeRequest = (id, token, date) => ({
  type: types.RECIPE_REMOVE.REQUEST,
  payload: { id, token, date },
});
export const removeRecipeSuccess = () => ({
  type: types.RECIPE_REMOVE.SUCCESS,
});
export const removeRecipeFailure = () => ({
  type: types.RECIPE_REMOVE.FAILURE,
});
