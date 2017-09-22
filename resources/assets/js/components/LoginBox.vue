<template>
    <div class="col col-md-6">
        <div class="panel panel-default">
            <form class="panel-body">
                <fieldset id="sign_in" class="ba b--transparent ph0 mh0">
                    <div class="mv3">
                        <label class="db fw6 lh-copy f6" for="email-address">Phone Number</label>
                        <cleave placeholder="Enter your phone number" v-model="phone" :options="{ phone: true, phoneRegionCode: 'US' }" class="form-control"></cleave>
                    </div>
                </fieldset>
                <div class="mt-3">
                    <div v-if="loggedIn">
                        <h3 class="my-3">Yay! You're logged in!</h3 class="my-3">
                        <button v-on:click="logoutClick" type="button" class="btn btn-primary">
                            Logout
                        </button>
                    </div>
                    <div v-else>
                        <button v-on:click="loginClick" type="button" class="btn btn-primary">
                            Login
                        </button>
                    </div>
                    <dinger @dinged="dingerDinged" class="mt-3">
                        Ding!
                    </dinger>
                </div>
            </form>
        </div>
    </div>
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
