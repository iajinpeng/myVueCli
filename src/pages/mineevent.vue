<template>
	<div>
		<h1>{{msg}}</h1>
		<my-event @myMethod="whatEver" desc="呵呵:"></my-event>
	</div>

</template>
<script>
	import MyEvent from '../components/Event';
	import { bus } from '../bus';
	export default{
		name: 'mEvt',
		data(){
			return {
				msg: '哈哈'
			}
		},
		methods: {
			whatEver(value){ //myMethod事件方法
				this.msg += '哈哈';
			}
		},
		components: {
			MyEvent
		},
		created(){
			bus.$on('didi', function (msg) {
				console.log('接受到的信息' + msg);
			})
		}
	}

</script>
