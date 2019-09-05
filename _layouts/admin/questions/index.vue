<template>
  <div id="pageId">
    <div class="row gutter-x-sm">
      
      <div class="col-12 col-md-12 q-mb-md">
        <q-btn 
        color="primary"  
        icon="fas fa-poll" 
        size="md" 
        :label="$tr('qquiz.layout.goPolls')"
        @click="$router.push({name: 'qquiz.admin.polls.index'})" />
      </div>

      <!---Form Left-->
      <div class="col-12 col-md-8">
        <!---Component CRUD-->
        <!--
        <crud :crud-data="import('@imagina/qquiz/_crud/questions')"/>
        -->
        <!--
        <crudQuestions :crud-data="import('@imagina/qquiz/_crud/questions')"/>
        -->
       <!--
       <answers/>
        -->

      </div>

      <div class="col-12 col-md-4">
        asdsd
      </div>

    </div>
  </div>
</template>
<script>
  //import crudQuestions  from '@imagina/qquiz/_components/admin/questions/crud'
  //import answers  from '@imagina/qquiz/_components/admin/answers'
  export default {
    props: {},
    //components: {crudQuestions},
    //components: {answers},
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
        //console.log('pollId:'+this.$route.params.id)
        //if (this.$route.params.id) this.itemId = this.$route.params.id
       
      }
    }
  }
</script>
<style lang="stylus">
  @import "~variables";
</style>
