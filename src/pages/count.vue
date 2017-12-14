<template>
	<div>
		<div>
			<h1>count: {{count}}</h1>
			<div>
				<button @click="increment">加1</button>
				<br>
				<button @click="decrement">减1</button>
			</div>
			<div>操作记录: {{record}}</div>
		</div>
		<div>
			<h1>count: {{num}}</h1>
			<div>
				<button @click="add">加1</button>
				<br>
				<button @click="reduce">减1</button>
			</div>
			<div>{{msg}}</div>
			<input type="text" v-model="edit" @keyup.enter="editMsg(edit)">
			<button @click="editMsg(edit)">点点点点</button>
		</div>
		<br>
		<a href="javascript:alert('清除成功');">清除缓存</a>
		<!--<div style="width: 100px;height: 100px;background: #3dffb7" draggable="true"></div>-->

		
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data(){
			return {
				edit: ''
			}
		},
		computed: {
			...mapGetters([
				'count',
				'record',
				'num',
				'msg'
			]),
		},
		methods: {
			...mapActions([
				'increment',
				'decrement',
				'add',
				'reduce',
				'editMsg'
			]),
		
		},
		mounted(){
			console.log(this.$store.state.count);
			this.$store.dispatch('editMsg', '第一条信息');

            (function () {  //一道面试题
	            const asteData = [
		            'path1/path2/file1',
		            'path1/path3/file2',
		            'path1000/file3',
		            'path1/path2/path4/file3',
		            'path2',
	            ];
	            console.log(ParseData(asteData));

	            function ParseData(data) {
		            var mapPaths = {};
		            var afterParse = [];
		            data.forEach(function (item) {
			            parseDataLoop(afterParse, item.split('/'), '');
		            });
		            return afterParse;

		            function parseDataLoop(data, paths, pre) {
			            if(!paths.length) return;
			            var root = paths.shift();
			            var path = pre + '/' + root;
			            var child;
			            if(!mapPaths.hasOwnProperty(paths)){
				            child = { name: root, children: []};
				            mapPaths[path] = child;
				            data.push(child);
			            }else{
				            child = mapPaths[path];
			            }
			            parseDataLoop(child.children, paths, path);
		            }
	            }
            })()


		}
	}
</script>
