<template>
    <div>
        <comment-box :idFromInfo="this.$route.params.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../Comment.vue'
    export default {
        name: "GoodsComment",
        data(){
            return{

            }
        },
        components:{
            'comment-box':comment
        }
    }
</script>

<style scoped>

</style>