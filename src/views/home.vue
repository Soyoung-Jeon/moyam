<template>
	<div>
		<app-header></app-header>
		<app-cardList></app-cardList>
		<app-footer></app-footer>

		<!-- goTop 버튼 -->
		<v-btn 
			class="btn_goTop" 
			fab 
			color="#FFA000"
			v-scroll="onScroll"
            v-show="fab"
            dark
            fixed
            bottom
            right
            @click="toTop"
		>
			<v-icon color="#fff">mdi-chevron-up</v-icon>
		</v-btn>
	</div>
</template>

<script>
import Header from '../components/Header.vue'
import CardList from '../components/CardList.vue'
import Footer from '../components/Footer.vue'

export default {
   components: {
		'app-header': Header,
		'app-cardList': CardList,
		'app-footer': Footer,
	},
	data: () => ({
		fab: false
	}),
	methods: {
		onScroll (e) {
			if (typeof window === 'undefined') return
			const top = window.pageYOffset ||   e.target.scrollTop || 0
			this.fab = top > 20
		},
		toTop () {
			this.$vuetify.goTo(0)
		}
	}
};
</script>


<style scoped>

</style>
