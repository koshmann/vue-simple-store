<template>
	<div>
		<h2>Product title</h2>
		<div class="price">{{ price }}</div>
		<hr>
		<button class="btn btn-warning" @click="decrease" :disabled="!canDecrease">-1</button>
		<input type="text" :value="cnt" @change="onChange">
		<button class="btn btn-success" @click="increase">+1</button>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		computed: {
			...mapGetters(['cnt', 'price']),
			canDecrease(){
				return this.cnt > 1;
			}
		},
		methods: {
			...mapActions(['decrease', 'increase', 'setCnt']),
			onChange(e){
				this.setCnt(parseInt(e.target.value));

				if(e.target.value !== this.cnt.toString()){
					this.$forceUpdate();
					//console.log('here');
				}
				// this.setCnt(1) -> this.$store.dispatch('setCnt', 1) -> vuex.action.setCnt(vuex, 1)
			}
		}
	}

	/* 
		let a = { b: 1, c: 2 };
		let d = { ...a , e: 3 };
	*/
</script>