<template>
  <div class="apply">
    <v-form>
      <app-textInput type="name"></app-textInput>
      <app-dropdown></app-dropdown>
      <app-radio></app-radio>
      <app-textInput type="sns"></app-textInput>
      <app-opinionInput type="apply"></app-opinionInput>
    </v-form>
  </div>
</template>

<script>
import DropDown from '../../components/Form/DropDown.vue'
import Radio from '../../components/Form/Radio.vue'
import OpinionInput from '../../components/Form/OpinionInput.vue'
import TextInput from '../../components/Form/TextInput.vue'

export default {
	components: {
		'app-dropdown': DropDown,
		'app-radio': Radio,
		'app-opinionInput': OpinionInput,
		'app-textInput': TextInput,
	},
}
</script>

<style scoped>
.apply { margin: 30px 0;}
</style>
