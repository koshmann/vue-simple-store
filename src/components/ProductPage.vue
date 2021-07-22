<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col col-md-6">
					<div class="ratio ratio-1x1 border d-flex justify-content-center align-items-center">
					</div>
				</div>
				<div class="col col-md-6">
					<h1>{{ product.title }}</h1>
					<hr class="my-4">
					<div class="alert alert-primary" role="alert">
						{{ product.price + ' руб.' }}
					</div>
					<template v-if="inCart(product.id)">
						<button type="button" class="btn btn-danger" @click="remove({ id: product.id })">
							Remove
						</button>
						<router-link :to="{ name: 'cart' }">
							<button type="button" class="btn btn-link">Go to cart</button>
						</router-link>
					</template>
					<button v-else type="button" class="btn btn-success" @click="add({ id: product.id })">
						Add to cart
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		productID() {
			return Number(this.$route.params.id)
		},
		...mapGetters('cart', [ 'inCart' ]),
		product() {
			return this.$store.getters['products/productById'](this.productID)
		},
	},
	methods: {
		...mapActions('cart', [ 'add', 'remove', 'setCnt' ])
	},
}
</script>