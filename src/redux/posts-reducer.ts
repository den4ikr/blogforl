import { AppStateType } from './redux-store';
import { API } from './../api/api';
import { PostType } from './../types/types';
import { ThunkAction } from "redux-thunk";

const SET_DATA = "SET_DATA";

let initialState = {
    data: [] as Array <PostType>,
}

type InitialStateType = typeof initialState

const PostsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, data: action.data }
        default:
            return state;
    }
}

type ActionsTypes = SetDataActionType

export const setData = (data: Array <PostType>): SetDataActionType => ( { type: SET_DATA, data } );
type SetDataActionType = {
    type: typeof SET_DATA,
    data: Array <PostType>,
}

//=================================
type ThunkType = ThunkAction <Promise <void>, AppStateType, unknown, ActionsTypes>

export const getData = (): ThunkType => async (dispatch) => {
    const response = await API.getPosts ();
    dispatch (setData (response.data))
}

export const addPost = (title: string, body: string): ThunkType => async (dispatch) => {
    await API.createPost (title, body);
    const response = await API.getPosts ();
    if (response) {
        debugger
        dispatch (setData (response.data))
    }
}

export default PostsReducer;