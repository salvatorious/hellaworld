<template>
    <form class="measure center">
        <fieldset id="sign_in" class="ba b--transparent ph0 mh0">
            <div class="mv3">
                <label class="db fw6 lh-copy f6" for="email-address">Phone Number</label>
                <cleave placeholder="Enter your phone number" v-model="phone" :options="{ phone: true, phoneRegionCode: 'US' }" class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"></cleave>
            </div>
        </fieldset>
        <div class="measure">
            <div v-if="loggedIn">
                <h1>Yay! You're logged in!</h1>
                <button v-on:click="logoutClick" type="button" class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                    Logout
                </button>
            </div>
            <div v-else>
                <button v-on:click="loginClick" type="button" class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                    Login
                </button>
            </div>
        </div>
        <dinger @dinged="dingerDinged"></dinger>
    </form>
</template>

<script>
    export default {
        data: () => {
            return {
                phone: '',
                loggedIn: false
            }
        },
        mounted() {
            console.log('Login button mounted.');
        },
        methods: {
            loginClick() {
                this.loggedIn = true;
                // this.$emit(loginClicked);
            },
            logoutClick() {
                this.loggedIn = false;
                // this.$emit(logoutClicked);
            },
            dingerDinged() {
                alert('ding!');
            }
        }
    }
</script>
