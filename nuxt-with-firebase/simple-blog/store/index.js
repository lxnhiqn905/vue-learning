import { postsCollection } from "@/firebase.config.js";

export const state = () => {
    posts : []
}

export const mutations = {
    SET_POSTS (state, val) {
        state.posts = val
    }
}

export const actions = {

}