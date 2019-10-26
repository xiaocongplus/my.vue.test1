<template>
    <div>
        <h3>评论</h3>
        <br>
        <div>
            <Input v-model="value17" maxlength="100" show-word-limit type="textarea"
                   placeholder="Enter something..." style="width: 200px"/>
        </div>
        <br>
        <div>
            <Button type="primary">发表评论</Button>
        </div>
        <List>
            <ListItem v-for="item in commentsArray" :key="item.add_time">
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                              :title="item.user_name" :description="item.content"/>
                {{item.add_time | dateFilter}}
            </ListItem>
        </List>
        <div>
            <Button type="primary" long @click="loaderMore">更多</Button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Comment",
        data() {
            return {
                value17: '',
                pageIndex: 1,
                commentsArray: []
            }
        },
        methods: {
            getComment() {
                this.axios.get('api/getcomments/' + this.idFromInfo + '?pageindex=' + this.pageIndex).then((result) => {
                    if (result.data.status === 0) {
                        this.commentsArray = this.commentsArray.concat(result.data.message);
                        // console.log(this.commentsArray);
                    } else {
                        console.log('err')
                    }
                })
            },
            loaderMore() {
                this.pageIndex += 1;
                this.getComment();
            }
        },
        created() {
            console.log(this.idFromInfo);
            this.getComment();
        },
        props: [
            'idFromInfo'
        ]
    }
</script>

<style scoped>

</style>