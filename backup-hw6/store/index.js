import { createStore } from 'vuex';

const ORDER_STATUSES = {
	base: 0,
	pending: 5,
	done: 10
}

const store = createStore({
	strict: process.env.NODE_ENV !== 'production', // false for production mode
	state() {
		return {
			price: 1000,
			cnt: 1,
			status: ORDER_STATUSES.base
		}
	},
	getters: {
		price: state => state.price,
		cnt: state => state.cnt,
		total: state => state.price * state.cnt,
		isOrderPending: state => state.status === ORDER_STATUSES.pending,
		isOrderDone: state => state.status === ORDER_STATUSES.done
	},
	mutations: {
		setCnt(state, cnt){
			state.cnt = Math.max(1, cnt);
		},
		setStatus(state, status){
			state.status = status;
		}
	},
	actions: {
		decrease({ state, commit }){
			commit('setCnt', state.cnt - 1)
		},
		increase({ state, commit }){
			commit('setCnt', state.cnt + 1)
		},
		setCnt({ commit }, cnt){
			commit('setCnt', isNaN(cnt) ? 1 : cnt);
		},
		send(store){
			store.commit('setStatus', ORDER_STATUSES.pending);

			setTimeout(() => {
				store.commit('setStatus', ORDER_STATUSES.done);
			}, 3000);
		}
	}
});

export default store;

/*
	get total
	total($store.state, $store.getters, rs, rg)

	commit('insrease', payload) -> $store.mutations.insrease($store.state, payload)

*/