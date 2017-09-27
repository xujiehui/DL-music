<template>
    <div class="hotMusic">
        <header></header>
        <h3>最热音乐</h3>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.hotMusic {
    position: absolute;
    top: 45px;
    width: 100%;
    header{
        width: 100%;
        height: 150px;
        background: url(/static/hotMusic.jpg) no-repeat center;
    }
    h3 {
        padding-left: 1em;
        border-left: 3px solid #000;
        margin: 20px 0;
    }
}
</style>


