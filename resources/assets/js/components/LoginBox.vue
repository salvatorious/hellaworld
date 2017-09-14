<template>
    <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
            <div class="panel-heading">Enter a phone number to log in</div>
            <div class="panel-body">
                <cleave placeholder="Enter your phone number" v-model="phone" :options="{ phone: true, phoneRegionCode: 'US' }" class="form-control"></cleave>
            </div>
            <div class="panel-body">
                <div v-if="loggedIn">
                    <h1>Yay! You're logged in!</h1>
                    <button v-on:click="logoutClick" type="submit" class="btn btn-primary">
                        Logout
                    </button>
                </div>
                <div v-else>
                    <button v-on:click="loginClick" type="submit" class="btn btn-primary">
                        Login
                    </button>
                </div>
            </div>
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
            }
        }
    }
</script>
