<template>
    <div class="measure lh-copy mt3">
        <button v-on:click="ding" type="button" class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
            Ding!
        </button>
    </div>
</template>


<script>
    export default {
        data: () => {
            return {
                blergh: false
            }
        },
        mounted() {
            console.log('Dinger mounted.');
        },
        methods: {
            ding() {
                this.$emit('dinged');
            }
        }
    }
</script>