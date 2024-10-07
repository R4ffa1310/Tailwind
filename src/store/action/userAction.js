export const SET_USER = "SET_USER"

export const setUser = (User) => {
      return {
        type : SET_USER,
        payload:User,
    };
};