<template>
  <div id="pageId">
    <div class="row gutter-x-sm">
      
      <!---Form Left-->
      <div class="col-12 col-md-12">
        <!---Component CRUD-->
        <crud :crud-data="import('@imagina/qquiz/_crud/questions')"/>
      </div>

      <!---Form Right-->
      <!--
      <div class="col-12 col-md-5">
        adsad
      </div>
      -->

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
        console.log('pollId:'+this.$route.params.id)
        //if (this.$route.params.id) this.itemId = this.$route.params.id
       
      },
    }
  }
</script>
<style lang="stylus">
  @import "~variables";
</style>
