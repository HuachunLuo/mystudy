<template>
  <div class="root">
    {{root}}
    <div class="back">
      <login/>
      {{back}}
      <div class="form-list"> <test1/>sdfgsdfgsdfgsdfg</div>
    </div>
  </div>
</template>

<script>
import login from './login'
import test1 from './test1'
export default {
  name: "test",
  date() {
    return {
      root: "根数据",
      back: "背景数据",
      form: "表单数据"
    };
  },
  methods: {},
  components:{login,test1}
};


</script>

<style>

</style>

