import { types } from './actions';

const INITIAL_STATE = {
  loadingSubmitRecipeRequest: false,
  sent: false,
  error: false,
};

const recipe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RECIPE.REQUEST:
      return {
        ...state,
        loadingSubmitRecipeRequest: true,
      };
    case types.RECIPE.SUCCESS:
      return {
        ...state,
        loadingSubmitRecipeRequest: false,
        sent: true,
      };
    case types.RECIPE.FAILURE:
      return {
        ...state,
        loadingSubmitRecipeRequest: false,
        error: true,
      };
    default:
      return state;
  }
};

export default recipe;
