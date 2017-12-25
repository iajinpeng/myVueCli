<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>{{foo}}</h2>
		<my-event @myMethod="whatEver" desc="呵呵:" name="金鹏" :foo.sync="foo"></my-event>
	</div>

</template>
<script>
	import MyEvent from '../components/Event';
	import { bus } from '../bus';
	export default{
		name: 'mEvt',
		data(){
			return {
				msg: '哈哈',
				foo: '黄鹤老板',
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
