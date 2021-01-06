import { useEffect } from "react"
import { connect } from "react-redux"
import { AppStateType } from "../../redux/redux-store"
import { PostType } from "../../types/types"
import Posts from "./Posts"
import { getData, addPost } from "../../redux/posts-reducer";

type PropsType = {
    getData: () => void,
    addPost: (title: string, body: string) => void,
    data: Array <PostType>
}

const PostsContainer: React.FunctionComponent <PropsType> = (props) => {

    useEffect ( () => {
        props.getData ();
    }, [] )

    return (
        <Posts data = {props.data} addPost = {props.addPost} />
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        data: state.posts.data,
    }
}

export default connect (mapStateToProps, {getData, addPost} )(PostsContainer);