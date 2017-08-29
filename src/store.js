/**
 * Created by jinpeng on 2017/7/7.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './vuex/getters';
import * as actions from './vuex/actions';
import * as mutations from './vuex/mutations'
import count2 from './vuex/modules/count2'
Vue.use(Vuex);

const state = {
	count: 0,
	record: []
};
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		count2
	}
})
