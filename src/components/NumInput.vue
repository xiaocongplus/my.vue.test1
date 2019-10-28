<template>
    <div>
        <input type="number" :value="numGo" @change="change" ref="numArea">
    </div>
</template>

<script>
    export default {
        name: "NumInput",
        data() {
            return {

            }
        },
        methods: {
            change() {
                console.log(this.$refs.numArea.value);
                this.$store.commit('updateNum',{id:this.idOfGoods,num:this.$refs.numArea.value});
            },
        },
        props:[
            'idOfGoods','numGo'
        ]
    }
</script>

<style scoped>

</style>