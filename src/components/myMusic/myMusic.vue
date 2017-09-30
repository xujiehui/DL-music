<template>
    <div class="myMusic">
        <div class="header-wrapper">
            <div class="more">更多</div>
            <div class="text">我的音乐</div>
            <div class="icon">
                <i class="fa fa-refresh" @click="showMusicPage()"></i>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="content-list">
                <ul>
                    <li class="list-item">
                        <i class="fa fa-music"></i>
                        <span>本地音乐</span>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li class="list-item">
                        <i class="fa fa-play-circle"></i>
                        <span>最近播放</span>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li class="list-item">
                        <i class="fa fa-bullseye"></i>
                        <span>我的电台</span>
                        <i class="fa fa-angle-right"></i>
                    </li>
                    <li class="list-item">
                        <i class="fa fa-star"></i>
                        <span>我的收藏</span>
                        <i class="fa fa-angle-right"></i>
                    </li>
                </ul>
            </div>
            <!-- 折叠面板 ：我创建的歌单 -->
            <div class="create-collapse">
                <div class="playlist-header" @click="createActive">
                    <i class="fa fa-angle-right" :class="{ 'fa-rotate-90' : isCreateActive }"></i>
                    <span>我创建的歌单</span>
                </div>
                <div class="playlist-body" :class="{ active : isCreateActive }">
                    <div class="inner">
                        <ul>
                            <li>
                                <div class="item">
                                    <a href="#">
                                        <div class="preview">
                                            <img src="../../../static/m-img.jpg" alt="歌单封面">
                                        </div>
                                    </a>
                                    <div class="item-content">
                                        <span class="title">歌单的名称1</span>
                                        <span class="count">1926首</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <a href="#">
                                        <div class="preview">
                                            <img src="../../../static/m-img.jpg" alt="歌单封面">
                                        </div>
                                    </a>
                                    <div class="item-content">
                                        <span class="title">歌单的名称2</span>
                                        <span class="count">2017首</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <a href="#">
                                        <div class="preview">
                                            <img src="../../../static/m-img.jpg" alt="歌单封面">
                                        </div>
                                    </a>
                                    <div class="item-content">
                                        <span class="title">歌单的名称3</span>
                                        <span class="count">91首</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 折叠面板 ： 我收藏的歌单 -->
            <div class="collect-collapse">
                <div class="playlist-header" @click="collectActive">
                    <i class="fa fa-angle-right" :class="{ 'fa-rotate-90' : isCollectActive }"></i>
                    <span>我收藏的歌单</span>
                </div>
                <div class="playlist-body" :class="{active : isCollectActive}">
                    <div class="inner">
                        <ul>
                            <li>
                                <div class="item">
                                    <a href="#">
                                        <div class="preview">
                                            <img src="../../../static/m-img.jpg" alt="歌单封面">
                                        </div>
                                    </a>
                                    <div class="item-content">
                                        <span class="title">歌单的名称1</span>
                                        <span class="count">1926首</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <a href="#">
                                        <div class="preview">
                                            <img src="../../../static/m-img.jpg" alt="歌单封面">
                                        </div>
                                    </a>
                                    <div class="item-content">
                                        <span class="title">歌单的名称2</span>
                                        <span class="count">2017首</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <a href="#">
                                        <div class="preview">
                                            <img src="../../../static/m-img.jpg" alt="歌单封面">
                                        </div>
                                    </a>
                                    <div class="item-content">
                                        <span class="title">歌单的名称3</span>
                                        <span class="count">91首</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="music-page-wrapper hide" :class="{ active : musicPageShow }">
            <music-page @pageShow="closeMusicPage"></music-page>
        </div>
    </div>
</template>

<script>
import MusicPage from '../musicPage/musicPage'

export default {
    data() {
        return {
            musicPageShow: false,
            isCreateActive: false,
            isCollectActive: false
        }
    },
    components: {
        'music-page': MusicPage
    },
    methods: {
        showMusicPage() {
            this.musicPageShow = true
        },
        closeMusicPage(closePage) {
            this.musicPageShow = closePage
        },
        createActive() {
            this.isCreateActive = !this.isCreateActive
        },
        collectActive() {
            this.isCollectActive = !this.isCollectActive
        }
    }
}
</script>

<style lang="less" scoped>
.myMusic {
    padding-bottom: 40px;
    .header-wrapper {
        display: flex;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        color: #fff;
        background: #C20C0C;
        .more {
            flex: 0 0 60px;
            &:hover {
                background: #9B0909;
            }
        }
        .text {
            flex: 1;
        }
        .icon {
            flex: 0 0 60px;
            &:hover {
                background: #9B0909;
            }
            i {
                margin-top: 10px;
                font-size: 20px;
            }
        }
    }
    .content-wrapper {
        display: flex;
        flex-direction: column;
        .content-list {
            .list-item {
                position: relative;
                font-size: 14px;
                padding: 15px;
                border-bottom: 1px solid rgba(0, 0, 0, .2);
                i {
                    color: #ea3b18;
                    margin-right: 10px;
                }
                i.fa-angle-right {
                    position: absolute;
                    right: 20px;
                }
            }
        }
        .create-collapse,
        .collect-collapse {
            overflow: hidden;
            .playlist-header {
                padding: 8px 15px;
                font-size: 12px;
                cursor: pointer;
                background: #eee;
                i {
                    font-size: 14px;
                    margin-right: 14px;
                    transition: all .25s;
                }
            }
            .playlist-body {
                max-height: 0;
                transition: all .25s;
                overflow: auto;
                .inner {
                    padding: 8px 15px;
                    .item {
                        margin-bottom: 8px;
                        height: 48px;
                        .preview {
                            width: 48px;
                            height: 48px;
                            float: left;
                            border-radius: 4px;
                            overflow: hidden;
                            img {
                                width: 100%;
                                height: 48px;
                                display: block;
                                margin: 0 auto;
                            }
                        }
                        .item-content {
                            margin-left: 60px;
                            height: 48px;
                            border-bottom: 1px solid #e5e9ef;
                            .title {
                                font-size: 14px;
                            }
                            .count {
                                display: block;
                                margin: 12px 0 5px 0;
                                font-size: 10px;
                                color: #666;
                            }
                        }
                    }
                }
                &.active {
                    max-height: 300px;
                }
            }
        }
    }
    .music-page-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all .3s ease-out;
        z-index: 10;
        color: #fff;
        overflow: hidden;
        &.hide {
            transform: translate3d(110%, 0, 0);
        }
        &.active {
            transform: translate3d(0, 0, 0);
        }
    }
}
</style>

