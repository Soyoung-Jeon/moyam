<template>
<div>
	<app-header></app-header>
	<div class="section">
		<div class="wrapper">
			<div class="contents">
				<router-view></router-view>
			</div>
			<app-aside></app-aside>
		</div>
	</div>
	<app-footer></app-footer>
</div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import Aside from '../../components/Aside_register.vue'

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
		'app-aside': Aside,

	},
}
</script>

<style scoped>
.section { padding: 0 12px;}
.contents { padding: 40px; width: 69%; background-color: #fff; border: 1px solid #dfdfdf;}
.aside_media { display: none; padding: 10px 0; border-top: 1px solid #dfdfdf;}
.aside_media ul li { font-weight: 100;}
.aside_media ul:last-child { text-align: right;}
.title h2 { font-size: 24px; font-weight: 600;}
.title p { margin: 20px 0 30px 0; font-size: 16px; line-height: 1.6; color: #777;}
.title p span { position: relative; top: -2px; margin-right: 10px; padding: 0px 5px 1px 5px; font-size: 12px; color: #3FC628; border: 1px solid #3FC628;}


@media all and (max-width:700px) { 
	.contents { width: 100%;}
	.aside_media { display: flex;}
}
</style>
