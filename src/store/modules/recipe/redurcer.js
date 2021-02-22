import { types } from './actions';

const mocData = [
  { postDay: 'seg', total: 0 },
  { postDay: 'ter', total: 0 },
  { postDay: 'quar', total: 0 },
  { postDay: 'quint', total: 0 },
  { postDay: 'sext', total: 0 },
  { postDay: 'sáb', total: 0 },
  { postDay: 'dom', total: 0 },
];
const mocData2 = [
  { Alimentação: 0 },
  { Educação: 0 },
  { Lazer: 0 },
  { Moradia: 0 },
  { Roupa: 0 },
  { Saúde: 0 },
  { Transporte: 0 },
];
const mocData3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const INITIAL_STATE = {
  loadingSubmitRecipeRequest: false,
  loadingSearchRecipeRequest: false,
  loadingRemovehRecipeRequest: false,
  listRecipe: [],
  listRecipeGraphsLine: mocData,
  listRecipeGraphsBar: mocData3,
  listRecipeGraphsPie: mocData2,
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
    // SEARCH GRAPHS
    case types.RECIPE_SEARCH_GRAPHS.REQUEST:
      return {
        ...state,
      };
    case types.RECIPE_SEARCH_GRAPHS.SUCCESS:
      return {
        ...state,
        listRecipeGraphsLine: action.payload.listLine,
        listRecipeGraphsBar: action.payload.listBar,
        listRecipeGraphsPie: action.payload.Listpie,
      };
    case types.RECIPE_SEARCH_GRAPHS.FAILURE:
      return {
        ...state,
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
