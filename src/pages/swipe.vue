<template>
	<div>
		<swipe class="my-swipe">
			<swipe-item class="slide1"></swipe-item>
			<swipe-item class="slide2"></swipe-item>
			<swipe-item class="slide3"></swipe-item>
		</swipe>
	</div>
</template>

<script>
	import {Swipe, SwipeItem} from 'vue-swipe';
	export default{
		data(){
			return {}
		},
		components: {
			Swipe, SwipeItem
		}
	}

	function shit6(m, n) {
		return (f => f(f))(g => (m, n) => m === 1 ? [n] : g(g)(m - 1, n).concat(n))(m, n)
	}
</script>
<style scoped>
	.my-swipe {
		width: 200px;
		height: 200px;
		color: #fff;
		font-size: 30px;
		text-align: center;
	}

	.slide1 {
		background-color: #0089dc;
		color: #fff;
		width: 2000px;
		height: 200px;
		float: left;
	}

	.slide2 {
		background-color: #ffd705;
		color: #000;
		width: 200px;
		height: 200px;
		float: left;
	}

	.slide3 {
		background-color: #ff2d4b;
		color: #fff;
		width: 200px;
		height: 200px;
		float: left;
	}
</style>
