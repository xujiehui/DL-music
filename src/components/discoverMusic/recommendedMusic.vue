<template>
    <div class="recommendedMusic">
      <h3>最新歌单</h3>{{test}}
      <ul class="songList">
      	<li class="songList-item" v-for="songList in songLists">
      		<img v-bind:src="songList.imgUrl">
      		<p>{{ songList.name }}</p>
      	</li>
      </ul>
      <h3>最新音乐</h3>
      <ul class="song">
      	<li class="song-item" v-for="song in songs">
      		<div class="song-info">
      			<h4>{{ song.name }}</h4>
      			<p>{{ song.singer }}</p>
      		</div>
      		<div class="play-icon">
      		</div>
      	</li>
      </ul>
      <div style="height:100px"></div>
    </div>
</template>

<style lang="less" scoped>
.recommendedMusic{
  position: absolute;
  top: 35px;
  width: 100%;
  h3{
  	padding-left: 1em;
  	border-left: 3px solid #000;
  	margin: 20px 0;
  }
  .songList{
  	width: 100%;
  	display: flex;
  	flex-wrap: wrap;
  	.songList-item{
  		width: 31.3333%;
  		padding:5px 1%;
  		img{
  			max-height: 100%;
  			max-width: 100%;
  		}
  		p{
  			display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
        line-height: 1.2;
  		}
  	}
  } 
  .song{ 	
  	.song-item{
  		display: flex;
  		.song-info{
  			padding: 5px 0 5px 1em; 
  			margin: 5px 0;
  			flex: 1 0 80%;
  			width: 80%;
  			h4{
  			margin-bottom: 5px;
  			font-size: 19px;
  			overflow: hidden;
    		text-overflow: ellipsis;
    		white-space: nowrap;
  			}
  			p{
  			color: #888;
  			font-size: 14px;
  		  overflow: hidden;
    		text-overflow: ellipsis;
    		white-space: nowrap;
  			}
  		}
  		.play-icon{
  			flex: 1 0 32px;
			  background:url(/static/play.png) no-repeat center;
  		}
  	}
  }	
}
</style>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            songLists: [],
            songs: []
        }
    },
    mounted: function() {
        this.getPlayList()
    },
    methods: {
        getPlayList: function() {
            axios.get('http://47.93.96.159/api/musicAPI.php', {
                params: {
                    type: 'playlist',
                    id: 3778678
                }
            })
                .then(response => {
                    let data = JSON.parse(response.data)
                    let tracks = data['result']['tracks']
                    for (let i = 0; i < tracks.length; i++) {
                        let artists = tracks[i]['artists'][0]
                        this.songs.push({
                            name: tracks[i].name,
                            singer: artists.name
                        })
                    }
                })
        }
    }
}
</script>