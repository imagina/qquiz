<template></template>
<script>
  export default {
    data() {
      return {
        crudId: this.$uid()
      }
    },
    computed: {
      crudData() {
        return {
          crudId: this.crudId,
          apiRoute: 'apiRoutes.qquiz.questions',
          permission: 'iquiz.questions',
          create: {
            title: this.$tr('qquiz.layout.newQuestion')
          },
          read: {
            columns: [
              {
                name: 'title', 
                label: this.$tr('ui.form.title'), 
                field: 'title', 
                align: 'rigth'
              },
              {
                name: 'actions', 
                label: this.$tr('ui.form.actions'), 
                align: 'left'
              },
            ],
            requestParams: {
              filter: {pollId:this.$route.params.id}
            }
          },
          update: {
            //to: 'qquiz.admin.questions.edit',
          },
          delete: true,
          formLeft: {
            title: {
              value: '',
              type: 'input',
              isTranslatable: true,
              props: {
                label: `${this.$tr('ui.form.title')}*`,
                rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
                ],
              }    
            },
            pollId: {
              value: this.$route.params.id,
              type: 'select',
              clearable: false,
              loadOptions: {
                apiRoute: 'apiRoutes.qquiz.polls',
                select: {label: 'title', id: 'id'},
                requestParams: {filter: {pollId : this.$route.params.id}}
              },
              props: {
                label: this.$tr('qquiz.layout.singlePoll'),
                rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
                ],
              },
            } 
          }
        }
      },
      //Crud info
      crudInfo() {
        return this.$store.state.qcrudComponent.component[this.crudId] || {}
      }
    },
  }
</script>
