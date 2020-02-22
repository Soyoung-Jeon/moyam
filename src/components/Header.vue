<template>
	<header>
		<div class="wrapper">
			<h1><router-link to="/">MOYAM</router-link></h1>
			<ul class="wrapper">
				<li><router-link to="/member/signIn">로그인</router-link></li>
				<li><router-link to="/member/signUp">가입하기</router-link></li>
				<li><router-link to="/member/partnership">파트너쉽</router-link></li>
			</ul>
		</div>
	</header>
</template>

<script>

export default {
}
</script>

<style scoped>
header { padding: 0 40px; width: 100%; height: 64px; line-height: 64px; background-color: #ffa000; box-shadow: 6px 0px 10px rgba(0, 0, 0, 0.4);}
h1 { padding-top: 3px; width: 200px; height: 64px;}
h1 a { display: block; font-family: 'Anja-Eliane'; font-size: 28px; color: #fff; letter-spacing: 2px;}
header ul li a { padding: 0 24px; display: block; color: #fff;}
header ul li a:hover { background-color: #ffae22;}
</style>