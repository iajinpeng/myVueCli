<template>
    <div class="hello">
        <!--<h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
          <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
          <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
          <br>
          <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
          <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
          <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
          <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>-->

        <h2><a href="test">test页面</a></h2>
        <h2><a href="iview">iview页面</a></h2>
        <h2><a href="mineevent">自定义事件</a></h2>
        <h2><a href="iupload">图片上传</a></h2>
        <h2><a href="swipe">swipe</a></h2>
        <hr>
        <h1><a href="count">vuex练习</a></h1>
        <canvas width="800" height="500"></canvas>

    </div>
</template>

<script>
	export default {
		name: 'hello',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
        mounted(){
	        var context = document.getElementsByTagName('canvas')[0].getContext('2d');
	        var n = 0;
	        var dx = 150;
	        var dy = 150;
	        var s = 100;
	        context.beginPath();
	        context.fillStyle = 'pink';
	        context.strokeStyle = 'rgb(0,0,100)';
	        var x = Math.sin(0);
	        var y = Math.cos(0);
	        var dig = Math.PI / 15 * 5;
	        for (var i = 0; i < 6; i++) {
		        var x = Math.sin(i * dig);
		        var y = Math.cos(i * dig);
		        context.lineTo(dx + x * s, dy + y * s);
		        console.log( x ,y )
	        }
	        context.closePath();
	        context.fill();
	        context.stroke();
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .ivu-form-item-content {
        text-align: left;
    }
</style>
