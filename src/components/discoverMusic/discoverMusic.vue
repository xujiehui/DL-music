<template>
    <div class="discoverMusic">
        <div class="discoverMusic-tab">
      		<div class="tab-item">
        		<router-link to="/discoverMusic/recommendedMusic">推荐音乐</router-link>
      		</div>
      		<div class="tab-item">
        		<router-link to="/discoverMusic/hotMusic">热歌榜</router-link>
      		</div>
      		<div class="tab-item">
        		<a>搜索</a>
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
.discoverMusic-tab {
    z-index: 100;
    background-color: #999;
    display: flex;
    position: fixed;
    left: 0;
    top: 0; 
    height: 35px;
    width: 100%;
    font-size: 17px;
    line-height: 35px;
    .tab-item {
      flex: 1;
      text-align: center;
      a {
        color: #fff;
        &.active {
          border-bottom: 4px solid #000;
          color: #000;
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
