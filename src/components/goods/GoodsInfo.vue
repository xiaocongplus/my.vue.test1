<template>
    <div class="goodsInfo-container">
        <div class="aim" ref="aim">0</div>
        <lunBo-box :lunBoList="this.lunBoList" :isfull="false"></lunBo-box>
        <Card>
            <div>
                <p>{{this.goodsInfoList.title}}</p>
                <p>
                    市场价: ￥<del>{{this.goodsInfoList.market_price}}</del>&nbsp;&nbsp;
                    <span class="now_price">销售价: ￥{{this.goodsInfoList.sell_price}}</span>
                </p>
                <p style="height: 40px">购买数量:
                    <input type="number" v-model="num" @change="numChanged" ref="numBox">
                </p>

                <transition @before-enter="beforeEnter" @after-enter="afterEnter" @enter="enter">
                    <div class="ball" v-show="flag" ref="ball"></div>
                </transition>

                <div>
                    <Button type="primary" @click="buyNow">立即购买</Button>
                    <Button type="error" @click="putCar">加入购物车</Button>
                </div>
            </div>
        </Card>
        <Card>
            <div>
                <p>商品参数</p>
                <p>商品货号: {{this.goodsInfoList.goods_no}}</p>
                <p>库存: {{this.goodsInfoList.stock_quantity}}件</p>
                <p>上架时间: {{this.goodsInfoList.add_time | dateFilter}}</p>
                <p>
                    <Button type="primary" @click="introduce" style="width: 49%">图文介绍</Button>
                    <Button type="error" @click="review" style="width: 50%">商品评论</Button>
                </p>
            </div>
        </Card>
    </div>
</template>

<script>
    import lunBo from '../LunBo.vue'

    export default {
        name: "GoodsInfo",
        data() {
            return {
                num:1,
                id: this.$route.params.id,
                lunBoList: [],
                goodsInfoList:{},
                flag:false
            }
        },
        methods: {
            getLunBo() {
                this.axios.get('api/getthumimages/' + this.id).then((result) => {
                    if (result.data.status === 0) {
                        result.data.message.forEach(item => {
                            item.img = item.src;
                        });
                        this.lunBoList = result.data.message;
                    } else {
                        this.$Message.warning('轮播图加载失败');
                    }
                });
            },
            getGoodsInfo(){
                this.axios.get('api/goods/getinfo/' + this.id).then((result) => {
                    if (result.data.status === 0) {
                        this.goodsInfoList = result.data.message[0];
                    } else {
                        this.$Message.warning('轮播图加载失败');
                    }
                });
            },
            buyNow() {

            },
            putCar() {
                this.flag = !this.flag;








            },
            introduce(){
                this.$router.push('/home/goods/goodsInfo/goodsDesc/'+this.id);
            },
            review(){
                this.$router.push('/home/goods/goodsInfo/goodsComment/'+this.id);
            },
            beforeEnter(el){
                el.style.transform = 'translate(0,0)';
                el.style.opacity = '1';

            },
            enter(el,done){
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                const aimPosition = this.$refs.aim.getBoundingClientRect();
                const xDi = aimPosition.left - ballPosition.left;
                const yDi = aimPosition.top - ballPosition.top;

                el.offsetWidth;
                el.style.opacity = '0';
                el.style.transform = `translate(${xDi}px,${yDi}px)`;
                el.style.transition = 'all 0.8s ease';
                // el.style.transition = 'all 0.8s cubic-bezier(.4,-0.3,1,0.68)';
                done();
            },
            afterEnter(el){
                this.flag = !this.flag;
            },
            numChanged(){
                console.log(this.num);
                console.log(this.$refs.numBox.value);
            }
        }, created() {
            this.getLunBo();
            this.getGoodsInfo();
        },
        components: {
            'lunBo-box': lunBo
        }
    }
</script>

<style lang="scss" scoped>
    .goodsInfo-container {
        background: #eeeeee;
        .now_price{
            color: red;
        }
        p{
            margin: 2px;
        }
        .ball{
            border-radius: 50%;
            width: 25px;
            height: 25px;
            background: red;
            position: absolute;
            top: 75px;
            left: 116px;
            z-index: 99;
        }
        .aim{
            border-radius: 50%;
            width: 25px;
            height: 25px;
            background: red;
            position: absolute;
            top: 59px;
            right: 235px;
            z-index: 99;
            text-align: center;
            padding-top:2px;
            font-size: 14px;
            color: yellow;
        }
    }
</style>