<template>
    <div class="searchMusic">
        <div class="searchInput">
            <input placeholder="搜索音乐" v-on:input="input" v-model="inputValue">
            <span class="close" v-if="isClose" v-on:click="clear">x</span>
        </div>
        <h3>热门搜索</h3>
        <ul class="hot-list">
            <li class="hot-item">朵蜜天女</li>
            <li class="hot-item">法朵拉</li>
            <li class="hot-item">法苏天女</li>
            <li class="hot-item">法朵拉</li>
            <li class="hot-item">拉缇天女</li>
            <li class="hot-item">法朵拉</li>
            <li class="hot-item">芮闪天女</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isClose: false,
            inputValue: ''
        }
    },
    methods: {
        input: function() {
            this.isClose = true
            if (this.inputValue === '') {
                this.isClose = false
            }
        },
        clear: function() {
            this.inputValue = ''
            this.isClose = false
        }
    }
}
</script>
<style lang="less" scoped>
.searchMusic {
    position: absolute;
    top: 45px;
    width: 100%;
    h3 {
        padding-left: 1rem;
        border-left: 3px solid #000;
        margin: 20px 0;
    }
    .searchInput{
        position: relative;
        display: flex;
        .close{
            position: relative;
            left: -1.5rem;
            line-height: 40px;
            color: #888;
            cursor: pointer;
            font-size: 1.2rem
        }
         margin: 0 auto;
         width: 80%;
        input{
            width: 90%;
            height: 40px;
            line-height: 18px;
            background: #ebecec;
            font-size: 14px;
            color: #333;
            border-radius: 20px;
            padding-left: 10%;
            outline: none;
            }
    }
    .hot-list{
        margin: 10px 1rem;
        .hot-item{
            display: inline-block;
            height: 32px;
            margin-right: 8px;
            margin-bottom: 8px;
            padding: 0 14px;
            font-size: 14px;
            line-height: 32px;
            color: #333;
            border: 1px solid;
            border-color: #d3d4da;
            border-radius: 32px;
        }
    }
}
</style>