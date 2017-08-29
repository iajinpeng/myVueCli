/**
 * Created by jinpeng on 2017/7/7.
 */

export default {
	state: {
		num: 100,
		msg: '初始状态'
	},
	getters: {
		num(state){
			return state.num;
		},
		msg(state){
			return state.msg;
		}
	},
	actions: {
		add({commit}){
			commit('add');
		},
		reduce({commit}){
			commit('reduce');
		},
		editMsg({commit}, msg){
			commit('EDIT_MSG', msg)
		}
	},
	mutations: {
		add(state){
			return state.num ++ ;
		},
		reduce(state){
			return state.num -- ;
		},
		EDIT_MSG(state, msg){
			return state.msg = msg;
		},

	}
}
