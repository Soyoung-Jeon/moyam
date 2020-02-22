<template>
    <div class="form_component" style="margin-bottom: 14px;">
        <h4 class="form_title"><v-icon color="#ec8e00" size="16px" class="pr-1 mb-1">mdi-check-bold</v-icon>성별</h4>
        <v-radio-group row :rules="rules">
            <v-radio color="#ffa000" label="남자" value="남자"></v-radio>
            <v-radio color="#ffa000" label="여자" value="여자"></v-radio>
        </v-radio-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rules: [ v => !!v || '성별을 선택해주세요.'],
        }
	},
}
</script>

<style scoped>
</style>