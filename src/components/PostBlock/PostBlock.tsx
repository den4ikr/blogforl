import { useState } from "react";
import { GetPostBlockType } from "../../types/types";
import AddComment from "./AddComment/AddComment";
import Comments from "./Comments/Comment";
import useStyles from "./PostBlockStyle";

type PropsType = {
    block: GetPostBlockType,
    deleteBlock: (postId: number) => void,
    addComment: (postId: number, body: string) => void,
}

const PostBlock: React.FunctionComponent <PropsType> = (props) => {

    const s = useStyles ();

    const [ deleted, setDeleted ] = useState (false);
    const deletePost = () => {
        if (props.block) {
            props.deleteBlock (props.block.id);
            setDeleted (true)
        }
    }

    return (
        <div className = {s.postWrapper} >
            {deleted
                ? <div className = {s.existTitle} >
                    Post Does Not Exist
                </div>
                : <div>
                    {props.block && 
                    <div>
                        <div className = {s.title} >
                            {props.block.title}
                        </div>
                        <div className = {s.body} >
                            {props.block.body}
                        </div>
                        <div>
                            <Comments comments = {props.block.comments} />
                        </div>
                        <div>
                            {props.block.title && 
                                <div className = {s.button} >
                                    <div>
                                        <button className = "btn btn-secondary" onClick = { deletePost } >
                                            Delete Post
                                        </button>
                                    </div>
                                    <div>
                                        <AddComment block = {props.block} addComment = {props.addComment} />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>}
                </div>
            }
        </div>
    )
}

export default PostBlock;