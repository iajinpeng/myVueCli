<template>
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
		<div ref="ani" style="width: 100px;height: 100px;border-radius: 50%;background: #0ff;margin: 100px auto;"></div>
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
				'num',
				'msg'
			]),
		},
		methods: {
			...mapActions([
				'add',
				'reduce',
				'editMsg'
			])
		},
		mounted(){
			console.log(this.$store.state.count2.msg)
			var keyframes = [
				{
					transform: 'translateY(-1000px) scaleY(2.5) scaleX(.2)',
					transformOrigin: '50% 0', filter: 'blur(40px)', opacity: 0
				},
				{
					transform: 'translateY(0) scaleY(1) scaleX(1)',
					transformOrigin: '50% 50%',
					filter: 'blur(0)',
					opacity: 1
				}
			];
			var options = {
				iterations: Infinity,
				iterationStart: 0,
				delay: 0,
				endDelay: 0,
				direction: 'alternate',
				duration: 700,
				fill: 'forwards',
				easing: 'ease-out',
			}
			var ele = this.$refs.ani;
			ele.animate(keyframes, options);
			console.log(ele.animate(keyframes, options))
		}
	}
</script>
