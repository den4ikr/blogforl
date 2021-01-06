import axios from "axios";

const instance = axios.create ({
    baseURL: "https://simple-blog-api.crew.red/posts"
})

export const API = {
    getPosts: () => {
        return instance.get (``);
    },
    getPostBlock: (postId: number) => {
        return instance.get (`/${postId}?_embed=comments`)
    },
    createPost: (title: string, body: string) => {
        return instance.post (``, {title, body})
    },
    deletePost: (postId: number) => {
        return instance.delete (`${postId}`)
    },
    createComent: (postId: number, body: string) => {
        return instance.post (`https://simple-blog-api.crew.red/comments`, {postId, body})
    }
}