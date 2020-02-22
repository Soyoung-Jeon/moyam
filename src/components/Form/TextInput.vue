<template>
    <div class="form_component">
        <h4 class="form_title">
            <v-icon color="#ec8e00" size="16px" class="pr-1 mb-1">mdi-check-bold</v-icon>{{item.title}}
        </h4>
        <v-text-field
            :type="item.type"
            :label="item.label"
            single-line
            outlined
            color="#ffa000"
            background-color="#fff"
            required
            :rules="item.rules"
        ></v-text-field>
    </div>
</template>

<script>
export default {
  props: ["type"],
  computed: {
    item(){
      let item = {
        "title": "",
        "label": "",
        "link": "",
      }

      if(this.type == "sns"){
        item.title = "SNS"
        item.label = "SNS 주소를 입력해주세요."
        item.rules = [ v => !!v || 'SNS 주소를 정확히 입력해주세요.']
      }

      else if (this.type == "name"){
        item.title = "이름"
        item.label = "이름을 입력해주세요."
        item.rules = [ v => !!v || '이름을 입력해주세요.']
      }

      else if (this.type == "link"){
        item.title = "캠페인 링크"
        item.label = "링크를 입력해주세요."
        item.rules = [ v => !!v || '링크를 정확히 입력해주세요.']
      }

      else if (this.type == "tel"){
        item.title = "연락처"
        item.label = "'-'을 제외한 연락처를 입력해 주세요."
        item.rules = [ v => !!v || '연락처를 숫자로만 정확히 입력해주세요.']
        item.type = "number"
      }
      return item
    }
  }
}
</script>

<style scoped>
</style>