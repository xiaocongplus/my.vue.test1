<template>
    <div>
        <Card>
            <Row v-for="(item,i) in carList" :key="item.id">
                <Col span="6">
                    <input type="button" v-model="$store.getters.getSelected[item.id]"
                           @click="change(item.id)">
                </Col>
                <Col span="6">
                    <img :src="item.thumb_path" alt="" style="width: 60px;height: 90px"/>
                </Col>
                <Col span="12">
                    <div>
                        <p>{{item.title}}</p>
                        <p>￥{{item.sell_price}}
                            <num-input :id-of-goods="item.id" :numGo="$store.getters.getIdAndNum[item.id]"></num-input>
                            <a href="" @click.prevent="delGoods(item.id,i)">删除</a>
                        </p>
                    </div>
                </Col>
            </Row>
        </Card>
        <Card>
            <p>总计</p>
            <p>已选{{$store.getters.getNumAndTotalPrice.cou}}件，总价:￥{{$store.getters.getNumAndTotalPrice.tol}}
                <input type="button" value="结算">
            </p>
        </Card>
        <div>
            {{$store.getters.getSelected}}
            {{$store.getters.getNumAndTotalPrice}}
        </div>
    </div>
</template>

<script>
    import numInput from '../NumInput.vue'
    export default {
        name: "Shopping",
        data() {
            return {
                switch1: 'false',
                carList:[]
            }
        },
        methods: {
            change(id) {
                this.$store.commit('selectedChange',id);
            },
            getCarInfo(){
                var idList = [];
                this.$store.state.car.forEach(item => idList.push(item.id));
                if(idList.length <= 0)
                    return;
                this.axios.get('api/goods/getshopcarlist/'+idList.join(',')).then(result => {
                    if(result.data.status === 0){
                        this.carList = result.data.message;
                        console.log( 'list:' );
                        console.log( this.carList );
                    }
                });
            },
            delGoods(id,i){
                this.carList.splice(i,1);
                this.$store.commit('delGo',id);
            }
        },
        created() {
            this.getCarInfo();
        },
        components:{
            'num-input':numInput
        }
    }
</script>

<style scoped>
    p {
        font-size: 14px;
        margin: 2px;
    }
</style>