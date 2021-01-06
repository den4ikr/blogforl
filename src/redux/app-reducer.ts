import { getData } from "./posts-reducer";

const INITIAL_SUCCESS = "INITIAL_SUCCESS";

let initialState = {
    initilised: false,
}

type InitialStateType = typeof initialState

const AppReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIAL_SUCCESS:
            return { ...state, initilised: true }
        default:
            return state;
    }
}

export const initialedSuccess = () => ( { type: INITIAL_SUCCESS } );

export const initiliseApp = () => (dispatch: any) => {
    let promise = dispatch (getData ())
    Promise.all ([promise])
        .then ( () => {
            dispatch (initialedSuccess ());
        } )
}

export default AppReducer;