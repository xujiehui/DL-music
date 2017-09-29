<template>
    <div id="app">
        <div class="bottom-tab">
            <div class="tab-item">
                <router-link :to="{ name : 'DiscoverMusic'}">
                    <div class="item">
                        <i class="fa fa-globe"></i>
                        <span>发现音乐</span>
                    </div>
                </router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{ name : 'MyMusic'}">
                    <div class="item">
                        <i class="fa fa-music"></i>
                        <span>我的音乐</span>
                    </div>
                </router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{ name : 'Account'}">
                    <div class="item">
                        <i class="fa fa-user-o"></i>
                        <span>账号</span>
                    </div>
                </router-link>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.bottom-tab {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    z-index: 10;
    background-color: #242424;
    .tab-item {
        flex: 1;
        text-align: center;
        a {
            display: block;
            font-size: 14px;
            color: #ccc;
            &.active {
                color: #fff;
                background: #000;
            }
            .item {
                i {
                    display: inline-block;
                }
                span {
                    display: inline-block;
                    font-size: 12px;
                    margin: 0;
                    padding: 0;
                }
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .25s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
