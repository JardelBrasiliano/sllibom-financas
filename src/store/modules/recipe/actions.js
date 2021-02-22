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
  RECIPE_SEARCH_GRAPHS: {
    REQUEST: '@recipe/RECIPE_SEARCH_GRAPHS_REQUEST',
    SUCCESS: '@recipe/RECIPE_SEARCH_GRAPHS_SUCCESS',
    FAILURE: '@recipe/RECIPE_SEARCH_GRAPHS_FAILURE',
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
// SEARCH GRAPHS
export const searchGraphsRecipeRequest = (token) => ({
  type: types.RECIPE_SEARCH_GRAPHS.REQUEST,
  payload: { token },
});
export const searchGraphsRecipeSuccess = (listLine, listBar, Listpie) => ({
  type: types.RECIPE_SEARCH_GRAPHS.SUCCESS,
  payload: { listLine, listBar, Listpie },
});
export const searchGraphsRecipeFailure = () => ({
  type: types.RECIPE_SEARCH_GRAPHS.FAILURE,
});
// REMOVE
export const removeRecipeRequest = (item, token) => ({
  type: types.RECIPE_REMOVE.REQUEST,
  payload: { item, token },
});
export const removeRecipeSuccess = () => ({
  type: types.RECIPE_REMOVE.SUCCESS,
});
export const removeRecipeFailure = () => ({
  type: types.RECIPE_REMOVE.FAILURE,
});
