<template>
    <div class="form_component">
        <h4 class="form_title"><v-icon color="#ec8e00" size="16px" class="pr-1 mb-1">mdi-check-bold</v-icon>나이</h4>
        <v-select
            :items="items"
            label="출생연도를 선택하세요."
            outlined
            color="#ffa000"
            single-line
            background-color="#fff"
            required
            :rules="rules"
        ></v-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            rules: [ v => !!v || '출생연도를 선택하세요.'],
        }
	},
	created() {
		for (let i = 2020; i > 1939; i--) {
			this.items.push(i)
		}
	},
}
</script>

<style scoped>

</style>