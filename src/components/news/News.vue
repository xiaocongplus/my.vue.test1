<template>
    <div>
        <List item-layout="vertical">

            <ListItem v-for="item in newsList" :key="item.title">

                <router-link :to="'/home/news/newsInfo/'+item.id">
                    <Card style="height: 210px">
                    <ListItemMeta :avatar="item.img_url" :title="item.title" :description="item.zhaiyao" style="text-align: left"/>
                    {{ item.add_time | dateFilter}}

                    <template slot="extra">
                        <img :src="item.img_url" style="width: 280px;height: 180px" alt="">
                    </template></Card>
                </router-link>
            </ListItem>
        </List>
    </div>
</template>

<script>
    export default {
        name: "news",
        data() {
            return {
                newsList: []
            }
        },
        methods: {
            getList() {
                this.axios.get('api/getnewslist').then((result) => {
                    if (result.data.status === 0) {
                        this.newsList = result.data.message;
                    } else {
                        console.log('err')
                    }
                })
            }
        },
        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>