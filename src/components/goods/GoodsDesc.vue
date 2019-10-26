<template>
    <div>
        <h3>{{goodsDesc.title}}</h3>
        <div v-html="goodsDesc.content"></div>
    </div>
</template>

<script>
    export default {
        name: "GoodsDesc",
        data(){
            return{
                goodsDesc:[]
            }
        },
        methods:{
            getGoodsDesc(){
                this.axios.get('api/goods/getdesc/'+this.$route.params.id).then((result)=>{
                    if(result.data.status === 0){
                        this.goodsDesc = result.data.message[0];
                        console.log('dfdf'+this.goodsDesc)
                    }
                })
            }
        },
        created() {
            this.getGoodsDesc();
        }
    }
</script>

<style scoped>

</style>