<template>
	<div>
		<!--<h1>{{msg}}</h1>
		<h2>{{msg2}}</h2>-->
		<p>
            <span v-for="(v,k) in orderedList">{{v}}<span v-if="k!=list.length-1">, </span></span>
        </p>
		<p>{{orderedList}}</p>
		<p>{{city.join(',')}}</p>
		<div contenteditable @input="change" style="border: 1px solid #ddd;"></div>
		<input type="text" v-focus @keyup="$log">

		<div>自定义指令:
			<p v-mine:arg.jin.peng="msg2"></p>
		</div>
		<select v-model="currentYear">
			<option value="2017">2017</option>
			<option value="2016">2016</option>
			<option value="2015">2015</option>
		</select>
		<select v-model="currentMonth">
			<option value="1">1月</option>
			<option value="2">2月</option>
			<option value="3">3月</option>
			<option value="4">4月</option>
			<option value="5">5月</option>
			<option value="6">6月</option>
			<option value="7">7月</option>
		</select>
		<ul class="date" v-for="row in data">
			<li style="border-right: 1px solid #d5d5d5;">导游姓名</li>
			<li v-for="item in row" class="date-item" v-if="item.getMonth()+1==currentMonth">{{item.getDate()}}</li>
		</ul>
        <Provincecity v-model="cur_provin"></Provincecity>
        <h1>cur: {{cur_provin}}</h1>
        <form action="">
            <input type="text" required>
            <button type="submit">提交</button>
        </form>
	</div>

</template>
<style scoped>
	ul.date{
		display: flex;
		border-top: 1px solid #d5d5d5;
		border-bottom: 1px solid #d5d5d5;
		width: 100%;
		height: 50px;
	}
	li.date-item{
		width: 50px;
		height: 100%;
		border-right: 1px solid #d5d5d5;
	}
</style>
<script>
	import  'lodash'
    import Provincecity from '../components/Provincecity.vue'
    export default {
        name: 'test',
        data(){
            return {
	            cur_provin: ['', '', ''],
                msg: '少年听雨阁楼上,红烛昏罗帐',
				msg2: '壮年听雨客舟中,江阔云低,断雁叫西风',
				list: [
					'2017-04-05',
					'2017-04-06',
					'2017-04-04',
					'2017-04-09',
					'2017-04-21',
					'2017-04-20',
				],
				city: [],
				checkcity: '',
				data: [],
				currentYear: '2017',
				currentMonth: '7',
            }
        },
		computed: {
        	orderedList () {
				return _.orderBy(this.list, '-1');
			}
		},
		watch: {
			currentYear(){
				this.initDate();
			},
			currentMonth(){
				this.initDate();
			}
		},
		methods: {
			change(e){
				console.log(e.target.innerHTML)
			},
			initDate(cur){
				var str = this.formatDate(this.currentYear, this.currentMonth, 1);
				this.data[0] = [];
				for (var i = 0; i <= 31; i++) {
					var d = new Date(str);
					d.setDate(d.getDate() + i);
					this.data[0].push(d);
				}
			},
			formatDate(year, month, day){
				var y = year;
				var m = month;
				if (m < 10) m = "0" + m;
				var d = day;
				if (d < 10) d = "0" + d;
				return y + "-" + m + "-" + d
			},
		},
		created(){
			this.initDate();
		},
        components: {
	        Provincecity
        },
		directives: {
			focus: {
				inserted: function (el) {
					// 聚焦元素
					el.focus()
				}
			},
			mine: {
				bind: function (el, binding, vnode) {
					var s = JSON.stringify;
					el.innerHTML =
						`name ${s(binding.name)}<br>
value ${s(binding.value)}<br>
expression ${s(binding.expression)}<br>
argument ${s(binding.arg)}<br>
modifiers ${s(binding.modifiers)}<br>
vnode keys ${Object.keys(vnode).join(', ')}<br>`
				}
			}
		}
    }
</script>
