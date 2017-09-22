<template>
    <div class="mx-auto">
        <button v-on:click="ding" type="button" class="btn btn-primary">
            <slot>this is where default text goes</slot>
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