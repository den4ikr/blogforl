import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import AppReducer from "./app-reducer";
import BlockReducer from "./block-reducer";
import PostsReducer from "./posts-reducer";

const reducers = combineReducers ({
    posts: PostsReducer,
    block: BlockReducer,
    app: AppReducer,
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType <ReducersType>

const store = createStore (reducers, applyMiddleware (thunkMiddleware));

export default store;