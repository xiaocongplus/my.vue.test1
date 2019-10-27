<template>
    <div>
        <Card>
            <Row v-for="item in carList" :key="item.id">
                <Col span="6">
                    <input type="button" :value="switch1" @click="change">
                </Col>
                <Col span="6">
                    <img :src="item.thumb_path" alt="" style="width: 60px;height: 90px"/>
                </Col>
                <Col span="12">
                    <div>
                        <p>{{item.title}}</p>
                        <p>{{item.sell_price}}
                            <input type="number" :value="item.cou">
                            <a href="">删除</a>
                        </p>
                    </div>
                </Col>
            </Row>
        </Card>
        <Card>
            <p>总计</p>
            <p>已选45件，总价:￥65
                <input type="button" value="结算">
            </p>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "Shopping",
        data() {
            return {
                switch1: 'false',
                carList:[]
            }
        },
        methods: {
            change() {
                if (this.switch1 === 'true')
                    this.switch1 = 'false';
                else
                    this.switch1 = 'true';
            },
            getCarInfo(){
                var idList = [];
                this.$store.state.car.forEach(item => idList.push(item.id));
                if(idList.length <= 0)
                    return;
                this.axios.get('api/goods/getshopcarlist/'+idList.join(',')).then(result => {
                    if(result.data.status === 0){
                        this.carList = result.data.message;
                        console.log( this.carList );
                    }
                });
            }
        },
        created() {
            this.getCarInfo();
        }
    }
</script>

<style scoped>
    p {
        font-size: 14px;
        margin: 2px;
    }
</style>