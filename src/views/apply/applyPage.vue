<template>
<div>
	<app-header></app-header>
	<div class="section">
		<div class="wrapper">
			<div class="contents">
				<div class="title">
					<h2 class="ellipsis-1">숙성삼겹살을 체험할 수 있는 '장남식당'</h2>
					<p class="ellipsis-2"><span>BLOG</span>숙성삼겹살이 정말 맛있는 신논현역 삼겹살 맛집에서 체험하고 가세요. 육류와 모든 식재료들은 국내산! 건너편 강남쪽으로 오시면 문화생활도 할 수 있는 '유나이티드갤러리'가 있습니다. 식전 또는 식후에 관람하시고 오세요.</p>
				</div>
				<div class="wrapper aside_media">
					<ul>
						<li>모집기간</li>
						<li>체험발표</li>
						<li>리뷰기간</li>
						<li>모집인원</li>
						<li>신청인원</li>
					</ul>
					<ul>
						<li>2.6 ~ 2.16</li>
						<li>2.17</li>
						<li>2.18 ~ 3.1</li>
						<li>5명</li>
						<li>2명</li>
					</ul>
				</div>
				<v-divider></v-divider>
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
import Aside from '../../components/Aside_apply.vue'

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
