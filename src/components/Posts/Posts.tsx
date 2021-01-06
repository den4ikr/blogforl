import { NavLink } from "react-router-dom";
import { PostType } from "../../types/types";
import AddPost from "./AddPost/AddPost";
import useStyles from "./PostsStyle";

type Propstype = {
    data: Array <PostType>,
    addPost: (title: string, body: string) => void,
}

const Posts: React.FunctionComponent <Propstype> = (props) => {
    const s = useStyles ();

    return (
        <div>
            <div className = {s.inputBlock} >
                <AddPost addPost = {props.addPost} />
            </div>
            <div>
                {props.data.map (post => {
                    return (
                        <div className = {s.postWrapper} key = {post.id} >
                            <div className = {s.title} >
                                <NavLink to = {"postblock/" + post.id} >
                                    {post.title}
                                </NavLink>
                            </div>
                            <div className = {s.body} >
                                {post.body}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Posts;