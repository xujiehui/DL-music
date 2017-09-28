<template>
  <div class="myMusic">
    <div class="header-wrapper">
      <div class="more">更多</div>
      <div class="text">我的音乐</div>
      <div class="icon">
        <i class="fa fa-refresh" v-bind:class="{ 'fa-spin': isActivePlay }"></i>
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
      <div class="create-playlist">
        <i class="fa fa-angle-right"></i>
        <span>我创建的歌单</span>
      </div>
      <div class="collect-playlist">
        <i class="fa fa-angle-right"></i>
        <span>我收藏的歌单</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActivePlay: false
    }
  },
  methods: {
    spin() {
      this.isActivePlay = true
    },
    noSpin() {
      this.isActivePlay = false
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
    .create-playlist,
    .collect-playlist {
      padding: 8px;
      padding-left: 15px;
      font-size: 12px;
      background: #eee;
      i {
        font-size: 14px;
      }
    }
  }
}
</style>

