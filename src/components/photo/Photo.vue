<template>
    <div>
        <Layout>
            <Header>
                <Menu mode="horizontal" :theme="'dark'" active-name="0">
                    <MenuItem v-for="(item,i) in photoKind" :key="item.id" :name="i">
                        <div @click="getImages(item.id)">{{item.title}}</div>
                    </MenuItem>
                </Menu>
            </Header>
            <Content>
                <List item-layout="vertical">
                    <ListItem v-for="item in photoList" :key="item.id">
                        <router-link :to="'/home/photo/photoInfo/'+item.id">
                            <Card style="height: 210px;text-align: left">
                                <ListItemMeta :avatar="item.img_url" :title="item.title"
                                              :description="item.zhaiyao" style="width: 300px"/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {{ item.add_time | dateFilter}}
                                <template slot="extra">
                                    <img :src="item.img_url" style="width: 280px;height: 180px" alt="">
                                </template>
                            </Card>
                        </router-link>
                    </ListItem>
                </List>
            </Content>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "Photo",
        data() {
            return {
                photoKind: [],
                photoList: []
            }
        },
        methods: {
            show() {
                console.log('an wo gan ma ')
            },
            getPhotoKind() {
                this.axios.get('api/getimgcategory').then(result => {
                    if (result.data.status === 0) {
                        this.photoKind = result.data.message;
                        this.photoKind.unshift({id: 0, title: '全部'});
                    }
                });
            },
            getImages(cateId) {
                this.axios.get('api/getimages/' + cateId).then(result => {
                    if (result.data.status === 0) {
                        this.photoList = result.data.message;
                    }
                });
            }
        }, created() {
            this.getPhotoKind();
            this.getImages(0)
        }
    }
</script>

<style lang="scss" scoped>
    .ivu-card {
        height: 200px;
        text-align: center;

        .ivu-card-body {
            padding: 50px;
        }
    }

</style>