<template>
	<div class="form_select">
		<v-combobox label="지역을 선택하세요." v-model="chips" :items="local" chips clearable multiple solo color="#FFA000">
        <template v-slot:selection="{ attrs, item, select, selected }">
			<v-chip color="#FFA000" v-bind="attrs" :input-value="selected" close @click="select" @click:close="remove(item)" v-on:model="selectedChip">
				<p>{{ item }}</p>
			</v-chip>
		</template>
		</v-combobox>
	</div>
</template>

<script>
export default {
	data() {
		return {
			chips: [],
			local: [
				'강남/논현', '강동/천호', '강서/목동', '건대/왕십리', 
				'관악/신림', '교대/사당', '노원/강북', '명동/이태원', 
				'삼성/선릉', '송파/잠실', '수유/동대문', '신촌/이대',
				'압구정/신사', '여의도/영등포', '종로/대학로', '홍대/마포'
			],
		}
	},
	methods: {
		remove (item) {
		this.chips.splice(this.chips.indexOf(item), 1)
		this.chips = [...this.chips]
		},
	},
}
</script>

<style scoped>
.form_select { padding: 0 12px; margin: 0 auto; max-width: 600px;}
.v-list-item__title { padding-left: 10px;}

</style>