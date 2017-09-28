<template>
    <div class="recommendedMusic">
<<<<<<< HEAD
      <h3>推荐歌单</h3>
=======
      <h3>最新歌单</h3>
>>>>>>> d1b81a74dddcd6f3946646d4b034701713ee0c9a
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
	  <loading v-if="isLoading"></loading>
      <div style="height:100px"></div>
    </div>
</template>

<style lang="less" scoped>
.recommendedMusic{
  position: absolute;
  top: 35px;
  width: 100%;
  h3{
  	padding-left: 1rem;
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
  			padding: 5px 0 5px 1rem; 
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
import loading from '../loading/loading'
export default {
    components: {
        'loading': loading
    },
    data() {
        return {
            songLists: [],
            songs: [],
            isLoading: false
        }
    },
    created: function() {
        this.getPlayList()
    },
    methods: {
        getPlayList: function() {
<<<<<<< HEAD
            axios.interceptors.response.use(response => {
                this.isLoading = true
                return response
                }, function(error) {
                    return Promise.reject(error)
            })
=======
>>>>>>> d1b81a74dddcd6f3946646d4b034701713ee0c9a
            axios.get('http://localhost/api/musicAPI.php', {
                params: {
                    type: 'playlist',
                    id: 3779629
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
                    this.isLoading = false
                })
        }
    }
}
</script>