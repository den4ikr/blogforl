import { AppStateType } from './redux-store';
import { API } from '../api/api';
import { GetPostBlockType } from '../types/types';
import { ThunkAction } from "redux-thunk";

const SET_BLOCK = "SET_BLOCK";

const initialState = {
    block: {} as GetPostBlockType,
}

type InitialStateType = typeof initialState;

const BlockReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_BLOCK:
            return { ...state, block: action.block }
        default:
            return state;
    }
}

type ActionsTypes = SetBlockActionType

type ThunkType = ThunkAction <Promise <void>, AppStateType, unknown, ActionsTypes>

export const setBlock = (block: GetPostBlockType): SetBlockActionType => ( { type: SET_BLOCK, block } as const );
type SetBlockActionType = {
    type: typeof SET_BLOCK,
    block: GetPostBlockType,
}

export const getBlock = (postId: number) => async (dispatch: any) => {
    const response = await API.getPostBlock (postId)
    dispatch (setBlock (response.data))
}

export const deleteBlock = (postId: number): ThunkType => async (dispatch) => {
    const response = await API.deletePost (postId);
}

export const addComment = (postId: number, body: string): ThunkType => async (dispatch) => {
    await API.createComent (postId, body);
    const response = await API.getPostBlock (postId);
    if (response) {
        dispatch (setBlock (response.data));
    }
}

export default BlockReducer;