import { useState } from "react";
import { GetPostBlockType } from "../../../types/types";
import useStyles from "../PostBlockStyle";

type PropsType = {
    block: GetPostBlockType,
    addComment: (postId: number, body: string) => void,
}

const AddComment: React.FunctionComponent <PropsType> = (props) => {
    const s = useStyles ();

    const [gotToEditMode, setGoToEditMode] = useState(false);
    const goToAddCommentMode = (e: any) => {
        setGoToEditMode(true);
    }

    const [comment, setComment] = useState("");
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }

    const addComment = () => {
        props.addComment(props.block.id, comment)
        setComment("");
    }

    return (
        <div className={s.comment} >
            {gotToEditMode
                ? <div className={s.editModeBlock} >
                    <div>
                        <input onChange={onChangeHandler} placeholder="Enter your comment..." className="form-control" type="text" value={comment} />
                    </div>
                    <div className={s.editModeButton} >
                        <button onClick={addComment} className="btn btn-secondary" >Add Comment</button>
                    </div>
                </div>
                : <div>
                    <button onClick={goToAddCommentMode} className="btn btn-secondary" >
                        Add Comment
                    </button>
                </div>
            }
        </div>
    )
}

export default AddComment;