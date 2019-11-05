<template>
    <div id="dasdboard">
        <section>
            <div class="col1">
                <h5>{{ userProfile.name }}</h5>
                <p>{{ userProfile.title }}</p>
                <div class="create-post">
                    <p>Create a post</p>
                    <form @submit.prevent>
                        <textarea v-model="post.content" required></textarea>
                        <button class="button" @click="createPosts">Post</button>
                    </form>
                </div>
                
            </div>

            <transition name="fade">
                    <div v-if="hiddenPosts.length" @click="showNewPost" class="hidden-posts">
                        <p>
                            Click to show <span class="new-posts">{{ hiddenPosts.length }} new posts </span>
                        </p>
                    </div>
            </transition>

            <div class="col2">
                <div v-if="posts.length">
                    <div v-for="post in posts" class="post" :key="post.id">
                        <h5>{{ post.userName }}</h5>
                        <span>{{ post.createOn | formatDate}}</span>
                        <p>{{ post.content | trimLength}}</p>
                        <ul>
                            <li><a href="">{{ post.comments }}</a></li>
                            <li><a href="">{{ post.likes }}</a></li>
                            <li><a href="">View full post</a></li>
                        </ul>
                    </div>
                </div>
                <div v-else>
                    <p class="no-results">There are no posts</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from "vuex";

import moment from "moment";

const fb = require("../firebaseConfig.js");

export default {
    data() {
        return {
            post: {
                content: ''
            }
        }
    },
    computed: {
        ...mapState(['userProfile', 'currentUser', 'posts', 'hiddenPosts'])
    },
    methods: {
        createPosts() {
            fb.postsCollection.add({
                createOn: new Date(),
                content: this.post.content,
                userId: this.currentUser.uid,
                userName: this.userProfile.name,
                comments: 0,
                likes: 0
            }).then(() => {
                this.post.content = ''
            }).catch((err) => {
                console.log(err)
            })
        },
        showNewPost() {
            let postsNewest = this.posts.concat(this.hiddenPosts)
            this.$store.commit('setPosts', postsNewest)
            this.$store.commit('setHiddenPosts', null)
        }
    },
    filters: {
        formatDate(val) {
            if(!val) {
                return '-'
            }
            let date = val.toDate()
            return moment(date).fromNow()
        },
        trimLength(val) {
            if (val.length < 100) {
                return val
            }
            return `${val.substring(0, 100)}...`

        }
    }
}
</script>

<style>

</style>