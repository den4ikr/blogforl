export type PostType = {
    id: number,
    title: string,
    body: string,
}

export type DataType = {
    data: PostType,
    getData: () => void,
}

export type GetPostBlockType = {
    id: number,
    title: string,
    body: string,
    comments: {
        postId: number,
        body: string,
        id: number,
    }
}