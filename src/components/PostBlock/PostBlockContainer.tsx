import PostBlock from "./PostBlock";
import { useEffect } from "react";
import { getBlock, deleteBlock, addComment } from "../../redux/block-reducer";
import { AppStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { GetPostBlockType } from "../../types/types";
import { withRouter } from "react-router";

type PropsType = {
    block: GetPostBlockType,
    getBlock: (postId: number) => void,
    deleteBlock: (postId: number) => void,
    addComment: (postId: number, body: string) => void,
}

const PostBlockContainer: React.FunctionComponent <PropsType> = (props) => {
    
    useEffect ( () => {
        //@ts-ignore
        const postId = props.match.params.postId

        props.getBlock (postId);
    }, [] )

    return (
        <PostBlock { ...props } />
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        block: state.block.block,
    }
}

//@ts-ignore
const WithUrlDataContainerComponent = withRouter (PostBlockContainer);

export default connect (mapStateToProps, {getBlock, deleteBlock, addComment})(WithUrlDataContainerComponent);