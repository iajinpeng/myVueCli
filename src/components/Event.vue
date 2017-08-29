<template>
	<h2 @click="myEvent">{{desc}}{{count}}</h2>

</template>
<script>
	import { bus } from '../bus';
	export default{
		name: 'event',
		data(){
			return {
				count: 1,
			}
		},
		props: {
			desc: {
				type: String,
				default: '这是描述'
			}
		},
		methods: {
			myEvent(){
				this.count ++ ;
				this.$emit('myMethod'); //触发myMethod事件

				bus.$emit('didi', '长安一片月');
			}
		},

	}

</script>
