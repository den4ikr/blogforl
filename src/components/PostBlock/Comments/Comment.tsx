import useStyles from "../PostBlockStyle";

type PropsType = {
    comments: {
        postId: number,
        body: string,
        id: number,
    }
}

const Comments: React.FunctionComponent<PropsType> = (props) => {
    const s = useStyles();
    return (
        <div>
            <div className={s.commentTitle} >
                Comments:
            </div>
            {props.comments &&
                Object.values(props.comments).map(comment => {
                    //@ts-ignore
                    return <div key = {comment.id} className={s.commentBody} >{comment.body}</div>
                })
            }
        </div>
    )
}

export default Comments;