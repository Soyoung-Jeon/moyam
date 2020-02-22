<template>
    <div class="form_component">
      <h4 class="form_title"><v-icon color="#ec8e00" size="16px" class="pr-1 mb-1">mdi-check-bold</v-icon>{{item.title}}</h4>
         <v-textarea
            :label="item.label"
            rows="5"
            outlined
            color="#ffa000"
            background-color="#fff"
            no-resize
            required
            :rules="item.rules"
          ></v-textarea>
    </div>
</template>

<script>
export default {
  props: ["type"],
  computed:{
    item(){
      let item = {
        "apply": "",
        "campaign": "",
      }

      if(this.type == "apply"){
        item.title = "신청 한마디"
        item.label = "신청한마디를 남겨주세요. (10글자 이상)"
        item.rules = [ 
              v => !!v || '신청 한마디를 입력해주세요.',
              v => (v && v.length >= 10) || '신청한마디를 10글자 이상으로 남겨주세요',
            ]
      }

      else if (this.type == "campaign"){
        item.title = "캠페인 주요 정보"
        item.label = "캠페인 주요 정보를 입력해주세요."
        item.rules = [ 
              v => !!v || '캠페인 주요정보를 입력해주세요.',
              v => (v && v.length >= 10) || '캠페인 주요 정보를 10글자 이상으로 남겨주세요',
            ]
      }
      return item
    }
  }
}
</script>

<style scoped>
</style>