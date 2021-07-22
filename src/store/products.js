export default {
	namespaced: true,
	state: {
		items: productsStub()
	},
	getters: {
		all: state => state.items,
		productById: (state) => (id) => {
			return state.items.find(product => product.id === id)
		}
	},
	mutations: {

	},
	actions: {
		
	}
}

function productsStub(){
	return [
		{"id":100,"title":"Ipnone 200","price":12000},
		{"id":101,"title":"Samsung AAZ8","price":22000},
		{"id":103,"title":"Nokia 3310","price":5000},
		{"id":105,"title":"Huawei ZZ","price":15000}
	];
}