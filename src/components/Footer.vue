<template>
	<footer>
		<h1>MOYAM</h1>
		<ul>
			<li>제호 : 모얌 (Moyam)</li>
			<li>대표이사 : 이경란</li>
			<li>개인정보보호최고책임자 : 박성룡</li>
			<li>메일 : everdata15@gmail.com</li>
			<li>주소 : 경기도 광명시 하안동 범안로 1008-13 모얌</li>
			<li>고객센터 : 010-5142-8566</li>
		</ul>
		<p>© MOYAM Corporation. All Rights Reserved.</p>
	</footer>
</template>

<script>
export default {
}
</script>

<style scoped>
	footer { padding: 40px 100px; width: 100%; height: auto; border-top: 1px solid #dfdfdf; text-align: center; background-color: #fff;}
	h1 { font-family: 'Anja-Eliane'; font-size: 32px; color: #FFA000; letter-spacing: 2px;}
	ul { margin: 0 auto; padding: 20px 0; width: 480px;}
	ul li { display: inline-block; font-weight: 100; line-height: 180%; color: #777;}
	ul li:nth-child(1)::after,
	ul li:nth-child(2)::after,
	ul li:nth-child(4)::after { content: ""; display: inline-block; width: 1px; height: 14px; background-color: #777; margin: 0 10px; vertical-align: middle;}
	p { margin-bottom: 0; color: #313131;}

	@media all and (max-width:700px) { 
	ul { width: 100%;}
	ul li { display: block;}
	ul li:nth-child(1)::after,
	ul li:nth-child(2)::after,
	ul li:nth-child(4)::after { display: none;}
}
</style>
