<template>
	<div>
		<button class="btn" @click="control" v-bind:style = 'style'>来一首</button>
		<p>{{name}} - <span>{{artist}}</span></p>
		<div class="player" :class="selected?'run':'runPaused'">
			<div class="arrow"></div>
		</div>
		<audio id="music" :src="url" width=0 height=0 loop="true" autoplay="true" >
			您的浏览器不支持 audio 标签
		</audio>
		<!-- <embed :src='url' width=0 height=0 type=audio/mpeg loop="true" autostart="false"> -->
	</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'rock',
  data:function(){
  	return  {
			name:null,
			artist:null,
			selected:null,
			style:{color:'#faffaf',background:'#B3A86A'},
			url:	null
		}
  },
  methods:{
  	control:function(){
			if(true){
  		// if(this.selected === null){
  			this.style.color = '#c2b74f';
  			this.style.background = 'rgb(28, 63, 117)';
  			this.selected = true;
				const randomnum = Math.floor(Math.random() * 100000);
				console.log(randomnum);
  			axios.get('https://bird.ioliu.cn/netease/song?id='+randomnum )
  			.then(function(res){
				 console.log(res.data.songs[0]);
				 this.name = res.data.songs[0].name;
				 this.artist = res.data.songs[0].artists[0].name;
				 this.url = res.data.songs[0].mp3Url;
				 document.addEventListener('DOMContentLoaded', function () {
						function audioAutoPlay() {
						var audio = document.getElementById('music');
						audio.play();
						document.addEventListener("WeixinJSBridgeReady", function () {
						audio.play();
						}, false);
						}
						audioAutoPlay();
				 });
				 return this.url
			 }.bind(this))
			.catch(function(err){
				this.selected = null;
				alert('oops! Try next')
			}.bind(this))
  		}
			// else{
  		// 	this.selected = null;
  		// 	this.style.color = '#faffaf';
  		// 	this.style.background = '#B3A86A';
  		// }

  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	p span{
		font-size: 22px;
	}
	.btn{
		height: 30px;
		border: 1px solid #ccc;
		border-radius: 10%;
		background-color: #B3A86A;
		outline: 0;
		color: #faffaf;
		font-size: 20px;
	}
	.player{
		margin:50px auto;
		width:200px;
		height: 200px;
		background-color: #666;
		border-radius: 50%;
		position: relative;

	}
	.run{
		animation: run 3s linear infinite ;
	}
	.runPaused{
		animation: run 3s linear infinite paused;
	}
	.player:after{
		content: '';
		position: absolute;
		top:0;
		bottom: 0;
		right: 0;
		left: 0;
		border-radius: 50%;
		margin:auto;
		width: 33%;
		height: 35%;
		background-color: #262626;
	}
	.arrow{
		width:2px;
		height: 60px;
		top: 10px;
		left: 50%;
		margin-left: -1px;
		position: absolute;
		border-radius: 50%;
		background-color: #c7dbc1;

	}
	@keyframes run{
		0%{transform:rotate(0) /*scale3d(1,1,1)*/;}
		100%{transform:rotate(360deg) /*scale3d(1.1,1.1,1.1)*/;}
	}
</style>
