<template>
    <div class="searchMusic">
        <div class="searchInput">
<<<<<<< HEAD
            <input placeholder="搜索音乐" v-on:input="input" v-model="inputValue">
            <span class="close" v-if="isClose" v-on:click="clear">x</span>
=======
            <input placeholder="搜索音乐">
>>>>>>> d1b81a74dddcd6f3946646d4b034701713ee0c9a
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
<<<<<<< HEAD
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
=======

>>>>>>> d1b81a74dddcd6f3946646d4b034701713ee0c9a
<style lang="less" scoped>
.searchMusic {
    position: absolute;
    top: 45px;
    width: 100%;
    h3 {
<<<<<<< HEAD
        padding-left: 1rem;
=======
        padding-left: 1em;
>>>>>>> d1b81a74dddcd6f3946646d4b034701713ee0c9a
        border-left: 3px solid #000;
        margin: 20px 0;
    }
    .searchInput{
<<<<<<< HEAD
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
=======
         margin: 0 auto;
         width: 80%;
        input{
            width: 80%;
>>>>>>> d1b81a74dddcd6f3946646d4b034701713ee0c9a
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
<<<<<<< HEAD
        margin: 10px 1rem;
=======
        margin: 10px 1em;
>>>>>>> d1b81a74dddcd6f3946646d4b034701713ee0c9a
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
<<<<<<< HEAD
=======

<script>
export default {
}
</script>
>>>>>>> d1b81a74dddcd6f3946646d4b034701713ee0c9a
