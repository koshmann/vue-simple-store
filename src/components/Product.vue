<template>
	<div>
		<div class="card">
			<div class="card-body">
				<h3>{{ title }}</h3>
				<div class="mb-4">{{ price }}</div>
				<router-link class=" btn btn-primary me-2" :to="{ name: 'product', params: { id: id } }">Read more</router-link>
			
				<template v-if="isInCart">
					<button type="button" class="btn btn-danger" @click="remove({ id: id })">
						Remove
					</button>
					<slot name="quantity"> 						
						<router-link :to="{ name: 'cart' }">
							<button type="button" class="btn btn-link">Go to cart</button>
						</router-link> 
					</slot>
				</template>
				<button v-else type="button" class="btn btn-success" @click="add({ id: id })">
					Add to cart
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		props: {
			title: String,
			price: Number,
			id: Number,
			isInCart: Boolean,
		},
		methods: {
			...mapActions('cart', [ 'add', 'remove', 'setCnt' ])
		},
		
	}

	// this.$route
</script>