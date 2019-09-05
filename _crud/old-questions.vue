<template>
  <!-- <answers :question="question" :visible="visible" ></answers> -->
</template>
<script>
  //Component
  import crud from '@imagina/qcrud/_components/crud'
  //import answers from '@imagina/qquiz/_components/admin/answers'
 
  export default {
    components:{
      //answers
    },
    /*
    data(){
      return {
        question : null,
        visible : false
      }
    },
    */
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qquiz.questions',
          permission: 'iquiz.questions',
          create: {
            title: this.$tr('qquiz.layout.newQuestion'),
            //to: 'qquiz.admin.questions.create',
          },
          read: {
            columns: [
              {
                name: 'id', 
                label: this.$tr('ui.form.id'), 
                field: 'id',
                style: 'width: 50px'
              },
              {
                name: 'title', 
                label: this.$tr('ui.form.title'), 
                field: 'title', 
                align: 'rigth'
              },
              {
                name: 'created_at', 
                label: this.$tr('ui.form.createdAt'), 
                field: 'createdAt', 
                align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {
                name: 'actions', 
                label: this.$tr('ui.form.actions'), 
                align: 'left'
              },
            ],
            requestParams: {
              //filter: {pollId:this.$route.params.id}
            }
            /*
            actions : [
              {
                icon : 'fas fa-boxes',
                color : 'deep-orange',
                action : (params) => {
                  //console.log("click")
                  //console.log(params)
                  //this.question = params
                  //this.visible = true
                }
                //route : 'qquiz.admin.answers.index'
              }
            ]
            */
          },
          update: {
            //to: 'qquiz.admin.questions.edit',
          },
          delete: true
          /*
          formLeft: {
            title: {
              label: this.$tr('ui.form.title'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: true,
            },
            pollId: {
              label: this.$tr('qquiz.layout.singlePoll'),
              value: this.$route.params.id,
              type: 'select',
              clearable: false,
              isRequired: true,
              loadOptions: {
                apiRoute: 'apiRoutes.qquiz.polls',
                select: {label: 'title', id: 'id'},
                requestParams: {filter: {pollId : this.$route.params.id}}
              }
            } 
          }
          */

        }
      }
    },
  }
</script>
