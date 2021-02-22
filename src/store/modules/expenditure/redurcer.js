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
  { tag: 'Alimentação', value: 0 },
  { tag: 'Educação', value: 0 },
  { tag: 'Lazer', value: 0 },
  { tag: 'Moradia', value: 0 },
  { tag: 'Roupa', value: 0 },
  { tag: 'Saúde', value: 0 },
  { tag: 'Transporte', value: 0 },
];
const mocData3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const INITIAL_STATE = {
  loadingSubmitRequest: false,
  loadingSearchExpenditureRequest: false,
  loadingRemoveExpenditureRequest: false,
  listExpenditure: [],
  listExpenditureGraphsLine: mocData,
  listExpenditureGraphsBar: mocData3,
  listExpenditureGraphspie: mocData2,
  sentExpenditure: false,
  error: false,
};

const expenditure = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EXPENDITURE_SUBMIT.REQUEST:
      return {
        ...state,
        loadingSubmitRequest: true,
      };
    case types.EXPENDITURE_SUBMIT.SUCCESS:
      return {
        ...state,
        loadingSubmitRequest: false,
        sent: true,
      };
    case types.EXPENDITURE_SUBMIT.FAILURE:
      return {
        ...state,
        loadingSubmitRequest: false,
        error: true,
      };
    // SEARCH
    case types.EXPENDITURE_SEARCH.REQUEST:
      return {
        ...state,
        loadingSearchExpenditureRequest: true,
      };
    case types.EXPENDITURE_SEARCH.SUCCESS:
      return {
        ...state,
        loadingSearchExpenditureRequest: false,
        listExpenditure: action.payload.list,
        sentExpenditure: true,
      };
    case types.EXPENDITURE_SEARCH.FAILURE:
      return {
        ...state,
        loadingSearchExpenditureRequest: false,
        error: true,
      };
    // SEARCH GRAPHS
    case types.EXPENDITURE_SEARCH_GRAPHS.REQUEST:
      return {
        ...state,
      };
    case types.EXPENDITURE_SEARCH_GRAPHS.SUCCESS:
      return {
        ...state,
        listExpenditureGraphsLine: action.payload.listLine,
        listExpenditureGraphsBar: action.payload.listBar,
        listExpenditureGraphsPie: action.payload.Listpie,
      };
    case types.EXPENDITURE_SEARCH_GRAPHS.FAILURE:
      return {
        ...state,
        error: true,
      };
    // REMOVE
    case types.EXPENDITURE_REMOVE.REQUEST:
      return {
        ...state,
        loadingRemoveExpenditureRequest: true,
      };
    case types.EXPENDITURE_REMOVE.SUCCESS:
      return {
        ...state,
        loadingRemoveExpenditureRequest: false,
      };
    case types.EXPENDITURE_REMOVE.FAILURE:
      return {
        ...state,
        loadingRemoveExpenditureRequest: false,
        error: true,
      };

    default:
      return state;
  }
};

export default expenditure;
