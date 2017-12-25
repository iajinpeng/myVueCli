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
		inheritAttrs: false,  //设置 interitAttrs 为 false，之后，不会应用到根元素上。
		methods: {
			myEvent(){
				this.count ++ ;
				this.$emit('myMethod'); //触发myMethod事件
				this.$emit('update:foo', '黄鹤一去不复返' + this.count);
				bus.$emit('didi', '长安一片月');
			}
		},
		mounted (){
			console.log(this.$attrs, this.$listeners)
		}

	}

</script>
