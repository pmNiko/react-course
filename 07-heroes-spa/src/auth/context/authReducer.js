import { types } from "@auth/types";

// Acciones para el context
export const authReducer = ( state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false
            }

        default:
            return state;
    }
}