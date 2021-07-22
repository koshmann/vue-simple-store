<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col col-sm-12">
					<app-product></app-product>
					<hr>
					<button type="button" class="btn btn-primary" @click="send" :disabled="isOrderPending">
						Make order
					</button>
					<div class="alert alert-warning" v-if="isOrderPending">
						Please wait...
					</div>
					<div class="alert alert-success" v-else-if="isOrderDone">
						Great!!!
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import AppProduct from './Product.vue';
	import { mapActions, mapGetters } from 'vuex';

	export default {
		components: {
			AppProduct
		},
		computed: {
			...mapGetters(['isOrderPending', 'isOrderDone'])
		},
		methods: {
			...mapActions(['send'])
		}
	}
</script>