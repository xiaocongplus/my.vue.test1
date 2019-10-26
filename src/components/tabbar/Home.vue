<template>
    <div>
        <lunBo-box :lunBoList="this.lunBo" :isfull="true"></lunBo-box>
        <br>
        <Row>
            <Col span="8">
                <router-link to="/home/news">
                    <Card>
                        <Icon type="md-chatboxes"/>
                        新闻资讯
                    </Card>
                </router-link>
            </Col>
            <Col span="8">
                <router-link to="/home/photo">
                    <Card>
                        <Icon type="md-chatboxes"/>
                        图片展示
                    </Card>
                </router-link>
            </Col>
            <Col span="8">
                <router-link to="/home/goods">
                    <Card>
                        <Icon type="md-chatboxes"/>
                        商品信息
                    </Card>
                </router-link>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <Card>开发中</Card>
            </Col>
            <Col span="8">
                <Card>开发中</Card>
            </Col>
            <Col span="8">
                <Card>开发中</Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    import lunBo from '../LunBo.vue'
    export default {
        name: "Home",
        data() {
            return {
                lunBo: []
            }
        },
        methods: {
            getLunBo() {
                this.axios.get('api/getlunbo').then((result) => {
                    if (result.data.status === 0) {
                        this.lunBo = result.data.message;
                    } else {
                        this.$Message.warning('轮播图加载失败');
                    }
                })
            }
        },
        created() {
            this.getLunBo();
        },
        components:{
            'lunBo-box':lunBo
        }
    }
</script>

<style lang="scss" scoped>
    .ivu-row {
        margin: 0;
        padding: 0;
    }

    .ivu-col-span-8 {
        text-align: center;
        font-size: 16px;
    }
</style>