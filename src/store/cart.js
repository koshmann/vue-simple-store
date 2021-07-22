export default {
	namespaced: true,
	state: {
		products: [] // cnt, id
	},
	getters: {
		/* inCart(state){
			return function(id){
				return state.products.some(pr => pr.id === id);
			}	
		}, */
		inCart: state => id => state.products.some(pr => pr.id === id),
		cnt: state => state.products.length,
		cartTotal: (state, getters) => {
			return state.products.reduce((acc, cartItem) => {
				let product = getters.cartGetProductById(cartItem.id);
			 	return (cartItem.cnt * product.price) + acc;
			}, 0).toFixed(0);
		},
		cartGetProductById(state, getters, rootState, rootGetters) {
			return rootGetters['products/productById']
		},
		cartProductCntById:state => id => state.products.find(pr => pr.id === id)['cnt'],
		productsInCart: state => state.products.map(product => {
			return product.id
		})
	},
	mutations: {
		add(state, product){
			state.products.push(product);
		},
		remove(state, id){
			state.products = state.products.filter(pr => pr.id !== id);
		},
		setCnt(state, { id, cnt }){
			let index = state.products.findIndex(pr => pr.id === id);
			state.products[index].cnt = Math.max(1, cnt);
		}
	},
	actions: {
		add({ commit, getters }, { id }){
			if(!getters.inCart(id)){
				commit('add', { id, cnt: 1 });
			}
		},
		remove({ commit, getters }, { id }){
			if(getters.inCart(id)){
				commit('remove', id);
			}
		},
		setCnt({ commit, getters }, { id, cnt }){
			if(getters.inCart(id)){
				commit('setCnt', { id, cnt });
			}
		}
	}
}