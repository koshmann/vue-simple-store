<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<div class="row">
			<div class="col col-sm-4 mb-3 mt-3" v-for="pr in productsInCartFull" :key="pr.id">
				<product-item 
					:id="pr.id"
					:title="pr.title"
					:price="pr.price"
					:isInCart="inCart(pr.id)"
					:cnt="cartProductCntById(pr.id)"
				>
				 	<template #quantity>
						<div class="input-group mt-2">
							<button class="btn btn-warning" @click="setCnt({id: pr.id, cnt: cartProductCntById(pr.id) - 1 })" :disabled="cartProductCntById(pr.id) <= 1">-1</button>
							<input :value="cartProductCntById(pr.id)" @input="setCnt({id: pr.id, cnt: $event.target.value })" class="form-control text-center" />
							<button class="btn btn-success" @click="setCnt({id: pr.id, cnt: cartProductCntById(pr.id) + 1 })">+1</button>
						</div>
					 </template> 
				</product-item>
			</div>
		</div>
		<template v-if="cnt > 0">
			<hr>
			<router-link :to="{ name: 'order' }" class="btn btn-success">Order now</router-link>
		</template>
		<template v-else>
			<p>Cart is empty</p>
		</template>
	</div>
</template>

<script>
import ProductItem from './Product.vue'
import { mapGetters, mapActions } from 'vuex';

	export default {
		components: {
			ProductItem,
		},
		computed: {
			...mapGetters('cart', [ 'cnt', 'inCart', 'productsInCart', 'cartProductCntById' ]),
			productsInCartFull() {
				let array = this.productsInCart.map(id => {
					return this.$store.getters['products/productById'](id)
				})
				return array
			},
		},
		methods: {
			...mapActions('cart', [ 'add', 'remove', 'setCnt' ])
		}
	}
</script>