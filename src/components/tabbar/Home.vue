<template>
    <div>
        <Card>
            <Carousel autoplay v-model="sta" loop>
                <CarouselItem v-for="item in lunBo" :key="item.img">
                    <div class="demo-carousel">
                        <img :src="item.img" alt="">
                    </div>
                </CarouselItem>
            </Carousel>
        </Card>
        <br>
        <Row>
            <Col span="8">
                <Card>col-12</Card>
            </Col>
            <Col span="8">
                <Card>col-12</Card>
            </Col>
            <Col span="8">
                <Card>col-12</Card>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <Card>col-12</Card>
            </Col>
            <Col span="8">
                <Card>col-12</Card>
            </Col>
            <Col span="8">
                <Card>col-12</Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                sta: 0,
                lunBo: []
            }
        },
        methods: {
            getLunBo() {
                this.axios.get('http://www.liulongbin.top:3005/api/getlunbo').then((result) => {
                    if (result.data.status === 0) {
                        this.lunBo = result.data.message;
                        // this.$Message.warning('轮播图加载成功');
                    } else {
                        this.$Message.warning('轮播图加载失败');
                    }
                })
            }
        },
        created() {
            this.getLunBo();
        }
    }
</script>

<style lang="scss" scoped>
    .demo-carousel {
        height: 300px;
        background: dodgerblue;
        font-size: 24px;
        color: hotpink;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .ivu-row {
        margin: 0;
        padding: 0;
    }

    .ivu-col-span-8 {
        text-align: center;
    }
</style>