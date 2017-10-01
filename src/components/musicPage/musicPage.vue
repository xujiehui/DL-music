<template>
    <div class="music-play-page">
        <div class="page-header">
            <i class="fa fa-angle-left" @click="closeMusicPage()"></i>
            <span class="music-name">歌名 - <span class="singer">歌手</span></span>
        </div>
        <div class="page-content">
            <div class="song-wrapper">
                <div class="song-img">
                    <div :class=" isPlay? 'song-on': 'song-off' ">
                        <img v-bind:src="imgurl">
                    </div>
                </div>
                <div class="song-lyrics">
                    <p>这里是歌词</p>
                    <p>这里是歌词</p>
                    <p>这里是歌词</p>
                    <p>这里是歌词</p>
                    <p>这里是歌词</p>
                    <p>这里是歌词</p>
                </div>
            </div>
        </div>
        <div class="page-footer">
            <div class="song-progressbar">
                <div class="start">{{currentTime}}</div>
                <div class="bar">
                    <div class="rdy">

                    </div>
                    <div class="curr" ref="curr">

                    </div>
                </div>        
                <div class="end">{{duration}}</div>
            </div>
            <div class="song-control">
                <div class="order">
                </div>
                <div class="previous">
                </div>
                <div :class=" isPlay? 'pause': 'play' " @click="play">
                </div>
                <div class="next">
                </div>
                <div class="list">
                </div>
            </div>
        </div>
        <div class="background-bottom-wrapper"></div>
        <div class="background-wrapper"></div>
        <div class="background-top-wrapper"></div>
        <audio ref="audio" src="/static/tonghuazheng.flac" @timeupdate="update" @canplay="load" @ended="stop"></audio>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgurl: '/static/m-img.jpg',
            isPlay: false,
            currentTime: '',
            duration: ''
        }
    },
    methods: {
        closeMusicPage() {
            this.$emit('pageShow', false)
        },
        play() {
            let audio = this.$refs.audio
            this.isPlay ? audio.pause() : audio.play()
            this.isPlay = !this.isPlay
        },
        stop() {
            this.isPlay = false
        },
        update() {
            let audio = this.$refs.audio
            let curr = this.$refs.curr
            let pre = audio.currentTime / audio.duration
            curr.style.width = pre * 100 + '%'
            let min = (audio.currentTime / 60) | 0
            let sec = (audio.currentTime % 60) | 0
            sec = sec < 10 ? '0' + sec : sec
            this.currentTime = min + ':' + sec
            // console.log(pre)
        },
        load() {
            let audio = this.$refs.audio
            this.currentTime = '0:00'
            let min = (audio.duration / 60) | 0
            let sec = (audio.duration % 60) | 0
            sec = sec < 10 ? '0' + sec : sec
            this.duration = min + ':' + sec
        }
    }
}
</script>

<style lang="less" scoped>
img{
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
}
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
        filter: blur(35px);
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
        .music-name{
            font-size: 18px;
        }
        .singer{
            font-size: 15px;
            color: #888; 
        }
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
        bottom: 81px;
        left: 0;
        right: 0;
        border: 1px solid #fff;
        border-radius: 10px;
        .song-wrapper{
            padding-top: 50px;
            .song-img{
                width: 100%;
                .song-off{
                    width: 180px;
                    margin: 0 auto;
                    animation: circling 20s infinite linear paused; 
                }
                .song-on{
                    width: 180px;
                    margin: 0 auto; 
                    animation: circling 20s infinite linear;
                }
                @keyframes circling {
                    0% {
                        -webkit-transform: rotate(0deg);
                        transform: rotate(0deg);
                        }
                    100% {
                        -webkit-transform: rotate(1turn);
                        transform: rotate(1turn);
                        }
                }
            }
        }
        .song-lyrics{
            width: 100%;
            height: 150px;
            margin-top: 65px;
            text-align: center;
            overflow: hidden;
            p{
                padding: .5rem 0;
            }
        }
    }
    .page-footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 80px;
        border: 1px solid #fff;
        border-radius: 10px;
        .song-progressbar{
            position: relative;
            display: flex;
            height: 10px;
            width: 80%;
            margin: 10px auto;
            vertical-align: middle;
            .start, .end{
                flex: 10%;
                line-height: 10px;
                padding:0 5px;
            }
            .bar{
                flex: 80%;
                .rdy{
                    z-index: 0;
                    width: 100%;
                    border-radius: 5px;
                    height: 100%;
                    background-color: #fff;
                }
                .curr{
                    z-index: 1;
                    border-radius: 5px;
                    height: 100%;
                    position: relative;
                    top: -10px;
                    width: 0;
                    background-color: #000;
                }
            }
        }
        .song-control{
            margin: 24px auto 0 auto;
            display: flex;
            .play, .pause, .next, .previous, .order, .list{
                flex: 1;
                width: 32px;
                height: 32px;
            }
            .play{
                 background: url(/static/play.png) no-repeat center;
            }
            .pause{
                 background: url(/static/pause.png) no-repeat center;
            }
            .next{
                 background: url(/static/next.png) no-repeat center;
            }
            .previous{
                 background: url(/static/previous.png) no-repeat center;
            }
            .list{
                 background: url(/static/list.png) no-repeat center;
            }
            .order{
                 background: url(/static/order.png) no-repeat center;
            }
        }
    }
}
</style>