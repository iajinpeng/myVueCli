/**
 * Created by jinpeng on 2017/7/7.
 */
export const increment = state => {
	state.count ++ ;
	state.record.push('增加');
};
export const decrement = state => {
	state.count -- ;
	state.record.push('减少');
};
export const EDIT_MSG = (state, msg) => {
	state.record.push(msg)
}
