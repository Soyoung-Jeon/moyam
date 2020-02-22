<template>
    <div class="memberform_wrap">
        <h2>우리 가게를 등록해보세요. 빠르게 연락드리겠습니다.</h2>
        <v-form>
        <v-text-field
			single-line
            class="formfield"
            color="#ffa000"
            prepend-icon="mdi-domain"
            v-model="company"
			:rules="companyRules"
            label="회사명을 입력해주세요."
            required
        ></v-text-field>

        <v-text-field
			single-line
            class="formfield"
            color="#ffa000"
            prepend-icon="mdi-account"
            v-model="name"
			:rules="nameRules"
            label="담당자 성함을 입력해주세요."
            required
        ></v-text-field>

        <v-text-field
			single-line
            class="formfield"
            color="#ffa000"
            prepend-icon="mdi-phone"
            v-model="phone"
			:rules="phoneRules"
            label="연락처를 입력해주세요."
            required
        ></v-text-field>

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

        
    
        <v-btn block x-large tile dark color="#ffa000" class="mt-4" @click="submit">SIGN UP</v-btn>

        <div class="member_shortcut">
            <p>이미 계정이 있으신가요? <router-link to="/member/signIn">여기</router-link>를 눌러 로그인해주세요.</p>
            <p>일반으로 회원가입 하시려면 <router-link to="/member/signUp">여기</router-link>를 눌러주세요.</p>
        </div>
        </v-form>
</div>
</template>

<script>
export default {
    data: () => ({
        company: '', 
        companyRules: [ v => !!v || '회사명을 입력해주세요.'],
        
        name: '', 
        nameRules: [ v => !!v || '담당자 성함을 입력해주세요.'],
        
        phone: '', 
        phoneRules: [ v => !!v || '연락처를 입력해주세요.'],
        
		email: '',
		emailRules: [
			v => !!v || '이메일을 입력하세요.',
			v => /.+@.+\..+/.test(v) || '이메일 형식을 다시 한 번 확인해주세요.',
		],
	})
}
</script>

<style scoped>
</style>

