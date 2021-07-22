<template>
<div>
	<h1>Products</h1>
	<div class="row">
		<div class="col col-sm-4 mb-3 mt-3" v-for="pr in products" :key="pr.id">
			<product-item 
				:id="pr.id"
				:title="pr.title"
				:price="pr.price"
				:isInCart="inCart(pr.id)"
			> </product-item>
		</div>
	</div>
</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex';
	import ProductItem from './Product.vue'

	export default {
		components: {
			ProductItem,
		},
		computed: {
			...mapGetters('products', { products: 'all' }),
			...mapGetters('cart', [ 'inCart' ])
		},
		
	}
</script>