<template>
    <div class="memberform_wrap">
        <h2>반갑습니다. 모얌에 로그인해주세요.</h2>
        <v-form>
        <v-text-field
			single-line
            class="formfield"
            color="#ffa000"
            prepend-icon="mdi-email"
			v-model="email"
			:rules="emailRules"
            label="이메일을 입력해주세요."
            required
        ></v-text-field>

        <v-text-field
			single-line
			class="formfield"
            color="#ffa000"
            prepend-icon="mdi-lock"
			v-model="password"
            type="password"
			:rules="passwordRules"
            label="패스워드를 입력해주세요."
			required
        ></v-text-field>
    
        <v-btn block x-large tile dark color="#ffa000" class="mt-4" @click="submit">SIGN IN</v-btn>

         <div class="member_shortcut">
            <p>계정이 없으신가요? <router-link to="/member/signUp">여기</router-link>를 눌러 가입해주세요.</p>
            <p>모얌과 파트너를 맺고 싶으시다면 <router-link to="/member/partnership">여기</router-link>를 눌러주세요.</p>
        </div>
        </v-form>
</div>
</template>

<script>
export default {
    data: () => ({
		email: '',
		emailRules: [
			v => !!v || '이메일을 입력하세요.',
			v => /.+@.+\..+/.test(v) || '이메일 형식을 다시 한 번 확인해주세요.',
		],
		password: '',
		passwordRules: [
			v => !!v || '패스워드를 입력하세요.',
			v => (v && v.length >= 8) || '패스워드를 8자 이상으로 입력하세요.',
		],
	})
}
</script>

<style scoped>
</style>

