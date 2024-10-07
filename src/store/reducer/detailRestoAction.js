import { DETAIL_RESTO } from "../action/detailRestoAction";

const nilaiDefault = {
  resto: {},
};

const detailRestoReducer = (state = nilaiDefault, action) => {
  switch (action.type) {
    case DETAIL_RESTO:
      return {
        ...state,
        resto: action.payload,
      };
    default:
      return state;
  }
};

export default detailRestoReducer;
