<template>
    <div>
        <h3>news info --- {{id}}</h3>
        <p>
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
        </p>
        <p>
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
        </p>
        <p>
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
            洋舰依然有副炮，副炮的具体参数也早已公布于众，我们称之为魔法副炮。
        </p>

        <br>
        <comment-box :idFromInfo="this.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../Comment.vue'
    export default {
        name: "NewsInfo",
        data(){
            return {
                id:this.$route.params.id
            }
        },
        components:{
            'comment-box':comment
        }
    }
</script>

<style scoped>

</style>