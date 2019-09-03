<template></template>
<script>
  //Component
  import crud from '@imagina/qcrud/_components/crud'

  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qquiz.answers',
          permission: 'iquiz.answers',
          create: {
            title: this.$tr('qquiz.layout.newAnswer'),
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
              filter: {questionId:this.$route.params.id}
            }
          },
          update: {
            //to: 'qquiz.admin.questions.edit',
          },
          delete: true,
          
           formLeft: {
            title: {
              label: this.$tr('ui.form.title'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: true,
            },
            questionId: {
              label: this.$tr('qquiz.layout.singleQuestion'),
              value: this.$route.params.id,
              type: 'select',
              clearable: false,
              isRequired: true,
              loadOptions: {
                apiRoute: 'apiRoutes.qquiz.questions',
                select: {label: 'title', id: 'id'},
                requestParams: {filter: {questionId : this.$route.params.id}}
              }
            } 
          }
          
        }
      }
    },
  }
</script>
