<template>
  <div id="indexComponentQuestion">
    <div class="row gutter-x-sm">
      
        <h3>prueba</h3>

    </div>
  </div>
</template>
<script>
  export default {
    props: {},
    components: {},
    watch: {},
    validations() {
      return {}
    },
    mounted() {
      this.$nextTick(function () {
         this.init()
      })
    },
    data() {
      return {}
    },
    methods: {
       //Init
      init() {
        //Search id in params URL
        console.log('ComponenteQuestion - pollId:'+this.$route.params.id)
        //if (this.$route.params.id) this.itemId = this.$route.params.id
       
      }
    }
  }
</script>
<style lang="stylus">
  @import "~variables";
</style>
