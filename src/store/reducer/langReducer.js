import { SET_LANG } from "../action/langAction";

const nilaiDefault = {
    lang: "en",
};

const langReducer = (state = nilaiDefault, action) => {
    switch (action.type){
        case SET_LANG: 
        return {
            ...state,
            lang: action.payload,
        };
    default:
        return state;
    }
};

export default langReducer
