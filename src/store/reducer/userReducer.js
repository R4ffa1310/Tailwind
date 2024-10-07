import { SET_USER } from "../action/userAction";

const nilaiDefault = {
    user: "adm",
};

const userReducer = (state = nilaiDefault, action) => {
    switch (action.type){
        case SET_USER: 
        return {
            ...state,
            user: action.payload,
        };
    default:
        return state;
    }
};

export default userReducer
