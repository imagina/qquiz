<template></template>
<script>
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
              /*
              {
                name: 'id', 
                label: this.$tr('ui.form.id'), 
                field: 'id',
                style: 'width: 50px'
              },
              */
              {
                name: 'title', 
                label: this.$tr('ui.form.title'), 
                field: 'title', 
                align: 'rigth'
              },
              /*
              {
                name: 'created_at', 
                label: this.$tr('ui.form.createdAt'), 
                field: 'createdAt', 
                align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              */
              {
                name: 'actions', 
                label: this.$tr('ui.form.actions'), 
                align: 'left'
              },
            ],
            requestParams: {}
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
              rules: [
                val => !!val || this.$tr('ui.message.fieldRequired')
              ],
              isTranslatable: true,
            }
          }
          
        }
      }
    },
  }
</script>
