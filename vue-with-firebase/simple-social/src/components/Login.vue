<template>
    <div id="login">
        <section>
            <div class="col1">
                <h1>Simple social media</h1>
                <p>Hello all, this is the project to learn the Vue programing</p>
            </div>
            
            <div class="col2">

                <transition name="fade">
                    <div v-if="performingRequest" class="loading">
                        <p>Loading ...</p>
                    </div>
                </transition>
                
                <form v-if="showLoginForm" @submit.prevent>
                    <h1>Welcome back</h1>

                    <label for="email1">Email</label>
                    <input v-model="loginForm.email" type="text" id="email1" placeholder="you@email.com"/>

                    <label for="password1">Password</label>
                    <input v-model="loginForm.password" type="password" id="password1" placeholder="*******"/>

                    <button @click="login" class="button">Log In</button>

                    <div class="extras">
                        <a>Forgo Password</a>
                        <a @click="toggleForm">Create An Account</a>
                    </div>

                </form>

                <form v-else @submit.prevent>
                    <h1>Get started</h1>

                    <label for="name">Name</label>
                    <input v-model="signupForm.name" type="text" id="name" placeholder="Your name"/>

                    <label for="title">Title</label>
                    <input v-model="signupForm.title" type="text" id="title" placeholder="Your company"/>

                    <label for="email2">Email</label>
                    <input v-model="signupForm.email" type="text" id="email2" placeholder="you@email.com"/>

                    <label for="password2">Password</label>
                    <input v-model="signupForm.password" type="password" id="password2" placeholder="*******"/>

                    <button @click="signup" class="button">Sign Up</button>

                    <div class="extras">
                        <a @click="toggleForm">Back to Login</a>
                    </div>

                </form>
            </div>
        </section>
    </div>
</template>

<script>
    const fb = require('../firebaseConfig.js')        

    export default {
        
        name: "Login",
        data() {doc
            return {
                loginForm: {
                    email: '',
                    password: ''
                },
                signupForm: {
                    name:'',
                    title:'',
                    email: '',
                    password: ''
                },
                showLoginForm: true,
                performingRequest: false
            }
        },
        methods: {
            login() {
                this.performingRequest = true
                // Execute login
                fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(res => {

                    this.$store.commit('setCurrentUser', res.user)
                    this.$store.dispatch('fetchUserProfile')
                    this.$router.push('/dashboard')
                }).catch(err => {
                    console.log(err)
                    this.performingRequest = false
                })
                
            },
            signup() {
                this.performingRequest = true
                // Execute signup
                fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(res => {

                    this.$store.commit('setCurrentUser', res.user)
                    
                    fb.usersCollection.doc(res.user.uid).set({
                        name: this.signupForm.name,
                        title: this.signupForm.title
                    })

                }).then(() => {
                    // Fetch the user data
                    this.$store.dispatch('fetchUserProfile')
                    this.$router.push('/dashboard')

                }).catch(err => {
                    console.log(err)
                    this.performingRequest = false
                })
            },
            toggleForm() {
                this.showLoginForm = !this.showLoginForm
            }
        }
    }
</script>

<style scoped>

</style>