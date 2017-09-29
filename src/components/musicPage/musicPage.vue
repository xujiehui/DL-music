<template>
    <div class="music-play-page">
        <div class="page-header">
            <i class="fa fa-angle-left" @click="closeMusicPage()"></i>
            <span class="music-name">这是音乐名称</span>
        </div>
        <div class="page-content">这是音乐内容</div>
        <div class="page-footer">这是底部播放器</div>
        <div class="background-bottom-wrapper"></div>
        <div class="background-wrapper"></div>
        <div class="background-top-wrapper"></div>
    </div>
</template>

<script>
export default {
    methods: {
        closeMusicPage() {
            this.$emit('pageShow', false)
        }
    }
}
</script>

<style lang="less" scoped>
.music-play-page {
    .background-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -5;
        background: url(../../../static/m-img.jpg) no-repeat;
        background-size: 100% 100%;
        filter: blur(10px);
    }
    .background-bottom-wrapper,
    .background-top-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -10;
        background: #ccc;
    }
    .background-top-wrapper {
        z-index: -3;
        background: rgba(0, 0, 0, 0.4);
    }
    .page-header {
        width: 100%;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 10px;
        text-align: center;
        line-height: 40px;
        i {
            position: absolute;
            top: 0;
            left: 20px;
            width: 40px;
            height: 30px;
            padding-top: 10px;
            font-size: 20px;
        }
    }
    .page-content {
        position: absolute;
        top: 41px;
        bottom: 51px;
        left: 0;
        right: 0;
        border: 1px solid #fff;
        border-radius: 10px;
        text-align: center;
        line-height: 100px;
    }
    .page-footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: 1px solid #fff;
        border-radius: 10px;
    }
}
</style>