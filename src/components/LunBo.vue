<template>
    <Card>
        <Carousel autoplay v-model="sta" loop>
            <CarouselItem v-for="item in this.lunBoList" :key="item.img">
                <div class="demo-carousel">
                    <img :src="item.img" alt="" :class="{'full':isfull}">
                </div>
            </CarouselItem>
        </Carousel>
    </Card>
</template>

<script>
    export default {
        name: "LunBo",
        data() {
            return {
                sta:0,
            }
        },
        props: [
            'lunBoList',
            'isfull'
        ]
    }
</script>

<style lang="scss" scoped>
    .demo-carousel {
        height: 300px;
        font-size: 24px;
        text-align: center;

        img {
            height: 100%;
        }
    }

    .full{
        width: 100%;
    }
</style>