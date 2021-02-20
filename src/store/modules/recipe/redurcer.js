import { types } from './actions';

const INITIAL_STATE = {
  loadingSubmitRecipeRequest: false,
  loadingSearchRecipeRequest: false,
  loadingRemovehRecipeRequest: false,
  listRecipe: [],
  sentRecipe: false,
  error: false,
};

const recipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RECIPE_SUBMIT.REQUEST:
      return {
        ...state,
        loadingSubmitRecipeRequest: true,
      };
    case types.RECIPE_SUBMIT.SUCCESS:
      return {
        ...state,
        loadingSubmitRecipeRequest: false,
        sent: true,
      };
    case types.RECIPE_SUBMIT.FAILURE:
      return {
        ...state,
        loadingSubmitRecipeRequest: false,
        error: true,
      };
    // SEARCH
    case types.RECIPE_SEARCH.REQUEST:
      return {
        ...state,
        loadingSearchRecipeRequest: true,
      };
    case types.RECIPE_SEARCH.SUCCESS:
      return {
        ...state,
        loadingSearchRecipeRequest: false,
        listRecipe: action.payload.list,
        sentRecipe: true,
      };
    case types.RECIPE_SEARCH.FAILURE:
      return {
        ...state,
        loadingSearchRecipeRequest: false,
        error: true,
      };
    // REMOVE
    case types.RECIPE_REMOVE.REQUEST:
      return {
        ...state,
        loadingRemoveRecipeRequest: true,
      };
    case types.RECIPE_REMOVE.SUCCESS:
      return {
        ...state,
        loadingRemoveRecipeRequest: false,
      };
    case types.RECIPE_REMOVE.FAILURE:
      return {
        ...state,
        loadingRemoveRecipeRequest: false,
        error: true,
      };
    default:
      return state;
  }
};

export default recipe;
