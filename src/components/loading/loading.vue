<template>
    <div class="loading">
        <div class="play play1"></div>
        <div class="play play2"></div>
        <div class="play play3"></div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.loading {
    position: absolute;
    top: 30vh;
    left: 50vw;
    width: 30vw;
    height: 32px;
    margin-left: -15vw;
    display: flex;
    .play{
        flex: 33%;
        background: url(/static/music.png) no-repeat center;
        width: 32px;
        height: 32px;
    }
    .play1{
        animation: move 1.5s ease-in infinite alternate;
    }
    .play2{
        animation: move 1.5s ease-in-out infinite alternate;
    }
    .play3{
        animation: move 1.5s ease-out infinite alternate;
    }
    @keyframes move{
        100%{
            transform: translateY(15vw);
        }
    }
}
</style>


