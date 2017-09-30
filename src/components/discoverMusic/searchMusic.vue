<template>
    <div class="searchMusic">
        <div class="searchInput">
            <input placeholder="搜索音乐" @input="input" v-model="inputValue">
            <span class="close" v-show="isInput" @click="clear">x</span>           
        </div>
        <div class="searchTips" v-show="isInput">
            <p @click="search">搜索 "{{inputValue}}"</p>
        </div>
        <div class="hotSearch" v-show="!isInput">
            <h3>热门搜索</h3>
            <ul class="hot-list">
                <li class="hot-item" v-for="hotSearch in hotSearchs">
                    {{hotSearch}}
                </li>
            </ul>
        </div>
        <div class="searchResult" v-show="isSearch">
            <h3>搜索结果</h3>
            <ul>
                <li v-for="searchResult in searchResults">
                    <a class="song-item" v-bind:href="searchResult.url">
                        <div class="song-info">
                            <h4>{{searchResult.name}}</h4>
                            <p>{{searchResult.singer}}</p>
                        </div>
                        <div class="play-icon">

                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <loading v-if="isLoading"></loading>
        <div style="height:100px"></div>
    </div>
</template>
<script>
import axios from 'axios'
import loading from '../loading/loading'
export default {
    components: {
        'loading': loading
    },
    data() {
        return {
            isInput: false,
            isSearch: false,
            isLoading: false,
            inputValue: '',
            searchResults: [],
            hotSearchs: ['朵蜜天女', '法苏天女', '拉缇天女']
        }
    },
    methods: {
        input: function() {
            this.isInput = true
            if (this.inputValue === '') {
                this.isInput = false
                this.isSearch = false
            }
        },
        clear: function() {
            this.inputValue = ''
            this.isInput = false
            this.isSearch = false
        },
        search: function() {
            this.isSearch = true
            axios.interceptors.response.use(response => {
                this.isLoading = true
                this.searchResults = []
                return response
                }, function(error) {
                    return Promise.reject(error)
            })
            axios.get('http://47.93.96.159/api/musicAPI.php', {
                params: {
                    type: 'search',
                    kw: this.inputValue
                }
            })
                .then(response => {
                    let data = JSON.parse(response.data)
                    let results = data['result']['songs']
                    for (let i = 0; i < results.length; i++) {
                        let artists = results[i]['artists'][0]
                        this.searchResults.push({
                            url: 'http://music.163.com/song?id=' + results[i].id,
                            name: results[i].name,
                            singer: artists.name
                        })
                    }
                    this.isLoading = false
                })
        }
    }
}
</script>
<style lang="less" scoped>
.searchMusic {
    position: absolute;
    top: 45px;
    width: 100%;
    h3 {
        padding-left: 1rem;
        border-left: 3px solid #000;
        margin: 20px 0;
    }
    .searchTips{
        margin: 0 auto;
        p{
            padding-left: 1rem;
            margin:15px 0 0 10%;
            color: #507daf;
            cursor: pointer;
        }
    }
    .searchInput{
        position: relative;
        display: flex;
        .close{
            position: relative;
            left: -1.5rem;
            line-height: 40px;
            color: #888;
            cursor: pointer;
            font-size: 1.2rem
        }
         margin: 0 auto;
         width: 80%;
        input{
            width: 90%;
            height: 40px;
            line-height: 18px;
            background: #ebecec;
            font-size: 14px;
            color: #333;
            border-radius: 20px;
            padding-left: 10%;
            outline: none;
        }
    }
    .hotSearch{
        .hot-list{
            margin: 10px 1rem;
            .hot-item{
                display: inline-block;
                height: 32px;
                margin-right: 8px;
                margin-bottom: 8px;
                padding: 0 14px;
                font-size: 14px;
                line-height: 32px;
                color: #333;
                border: 1px solid;
                border-color: #d3d4da;
                border-radius: 32px;
            }
        }
    }
  	.song-item {
  		display: flex;
  		.song-info {
  			padding: 5px 0 5px 1rem;
  			margin: 5px 0;
  			flex: 1 0 80%;
  			width: 80%;
  		h4 {
  			margin-bottom: 5px;
  			font-size: 19px;
  			overflow: hidden;
    		text-overflow: ellipsis;
    		white-space: nowrap;
  		}
  		p {
  			color: #888;
  			font-size: 14px;
  		    overflow: hidden;
    		text-overflow: ellipsis;
    		white-space: nowrap;
  		}
  	    }
  	    .play-icon {
  		    flex: 1 0 32px;
		    background:url(/static/play.png) no-repeat center;
  	    }
  	}
}
</style>
