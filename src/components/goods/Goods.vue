<template>
    <div>
        <div class="good-list">
            <div class="good-item" v-for="item in goodsList" :key="item.id" @click="toInfo(item.id)">
                <img :src="item.img_url" alt="">
                <h2 class="title">{{item.title}}</h2>
                <div class="info">
                    <p class="price">
                        <span class="now">￥{{item.sell_price}}</span>
                        <span class="old">￥{{item.market_price}}</span>
                    </p>
                    <p class="sell">
                        <span>热销中!</span>
                        <span>剩余{{item.stock_quantity}}件</span>
                    </p>
                </div>
            </div>
        </div>
        <div>
            <Button type="primary" long @click="loaderMore">更多</Button>
        </div>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
        name: "Goods",
        data(){
            return{
                goodsList:[],
                pageIndex:1
            }
        },
        methods:{
            getGoodsList(){
                this.axios.get('api/getgoods?pageindex='+this.pageIndex).then((result)=>{
                    if(result.data.status === 0){
                        this.goodsList = this.goodsList.concat(result.data.message);
                        console.log(this.goodsList)
                    }
                })
            },
            loaderMore(){
                this.pageIndex += 1;
                this.getGoodsList();
            },
            toInfo(id){
                // this.$router.push('/home//goods/goodsInfo/'+id);
                this.$router.push({name:'goodsInfo',params:{id}});
            }
        },
        created() {
            this.getGoodsList();
        }
    }
</script>

<style lang="scss" scoped>
    .good-list {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        justify-content: space-between;

        .good-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            img {
                width: 100%;
            }

            .title {
                font-size: 14px;
            }

            .info {
                background: #eeeeee;

                p {
                    margin: 0;
                    padding: 5px;
                }

                .price {
                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }

                    .now {
                        color: red;
                        font-weight: bold;
                        font-size: 14px;
                    }
                }

                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                }
            }
        }
    }

</style>