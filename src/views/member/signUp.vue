<template>
    <div class="memberform_wrap">
        <h2>간단한 회원가입으로 모얌을 이용하실 수 있습니다.</h2>
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
            prepend-icon="mdi-account"
			v-model="nickname"
			:rules="nicknameRules"
			label="닉네임을 입력해주세요. (10자 이내)"
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
    
        <v-btn block x-large tile dark color="#ffa000" class="mt-4" @click="submit">SIGN UP</v-btn>

        <div class="member_shortcut">
            <p>이미 계정이 있으신가요? <router-link to="/member/signIn">여기</router-link>를 눌러 로그인해주세요.</p>
        </div>
        </v-form>
    </div>
</template>

<script>
export default {
	data: () => ({
		nickname: '',
		nicknameRules: [
			v => !!v || '닉네임을 입력하세요.',
			v => (v && v.length <= 10) || '닉네임을 10자 이하로 입력하세요.',
		],
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
.btn_icon { margin-right: 8px; width: 30px; height: 30px;}
</style>

