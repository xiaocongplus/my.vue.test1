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
                <Breadcrumb :style="{margin: '20px 0'}" separator=">">
                    <BreadcrumbItem v-for="(item,i) in list" :key="item.path" :to="item.urlPath">
                        {{item.path}}
                    </BreadcrumbItem>
                    <BreadcrumbItem>{{lastItem}}</BreadcrumbItem>
                </Breadcrumb>
<!--                <transition mode="out-in">-->
                    <router-view></router-view>
<!--                </transition>-->
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
                theme1: 'light',
                list: [],
                arrayUrl: [],
                lastItem: ''
            }
        },
        methods: {
            queryList() {
                this.list = [];
                this.arrayUrl = this.$route.fullPath.split('/');
                this.arrayUrl.splice(0, 1);

                var box = '';
                const length = this.arrayUrl.length;

                this.arrayUrl.forEach((val, i) => {
                    if (i === length - 1) {
                        this.lastItem = val;
                    }
                    box = box + '/' + val;
                    this.list.push({path: val, urlPath: box});
                });

                if (length > 3) {
                    this.lastItem = this.arrayUrl[length - 2];
                    this.list.splice(length - 2, 2);
                }
                this.list.splice(length - 1, 1);
            }
        },
        created() {
            this.queryList();
        },
        beforeUpdate() {
            this.queryList();
        }
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
        overflow-x: hidden;
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active, .v-leave-v-enter-active {
        transition: all 0.8s ease;
    }

</style>