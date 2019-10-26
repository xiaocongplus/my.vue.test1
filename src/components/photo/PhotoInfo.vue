<template>
    <div>

        <div style="height: 210px">
            <List :header="photoInfo[0].title">
                <ListItem>{{photoInfo[0].content}}</ListItem>
                <ListItem>
                    {{ photoInfo[0].add_time | dateFilter}}&nbsp;&nbsp;&nbsp;点击次数: {{photoInfo[0].click}}
                </ListItem>
            </List>
        </div>
        <comment-box :idFromInfo="this.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../Comment.vue'

    export default {
        name: "PhotoInfo",
        data() {
            return {
                id: this.$route.params.id,
                photoInfo: []
            }
        }, methods: {
            getPhotoInfo() {
                this.axios.get('api/getimageInfo/' + this.id).then(result => {
                    if (result.data.status === 0) {
                        this.photoInfo = result.data.message;
                        console.log(this.photoInfo)
                    }
                });
            }
        }, created() {
            this.getPhotoInfo();
        },
        components: {
            'comment-box': comment
        }
    }
</script>

<style scoped>

</style>