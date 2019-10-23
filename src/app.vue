<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" :theme="'dark'" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1" to="/home">
                            <Icon type="md-home"/>
                            首页
                        </MenuItem>
                        <MenuItem name="2" to="/vip">
                            <Icon type="md-person"/>
                            会员
                        </MenuItem>
                        <MenuItem name="3" to="/shopCar">
                            <Icon type="md-cart"/>
                            购物车
                        </MenuItem>
                        <MenuItem name="4" to="/search">
                            <Icon type="md-search"/>
                            搜索
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <transition mode="out-in">
                    <router-view></router-view>
                </transition>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                theme1: 'light'
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 20px 0 auto;
    }

    .layout-footer-center {
        text-align: center;
    }

    .ivu-layout-content {
        height: 2000px;
        overflow-x: hidden;
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active, .v-leave-v-enter-active {
        transition: all 0.8s ease;
    }

</style>