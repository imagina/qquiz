<template></template>
<script>
  //Component
  import crud from '@imagina/qcrud/_components/crud'

  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qquiz.polls',
          permission: 'iquiz.polls',
          create: {
            title: this.$tr('qquiz.layout.newPoll')
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
              filter: {storeId : this.$store.state.qmarketplaceStores.storeSelected}
            },
            actions : [
              {
                icon : 'fas fa-question-circle',
                color : 'warning',
                route : 'qquiz.admin.questions.index'
              }
            ]
          },
          update: {
          
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            title: {
                label: this.$tr('ui.form.title'),
                value: '',
                type: 'text',
                rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
                ],
                isTranslatable: true,
            },
            description: {
                label: this.$tr('ui.form.description'),
                value: '',
                type: 'html',
                isTranslatable: true,
            },
            storeId:{
              label: 'Tienda',
              value: parseInt(this.$store.state.qmarketplaceStores.storeSelected),
              permission: 'marketplace.stores.manage',
              rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
              ],
              type: 'select',
              loadOptions: {
                apiRoute: 'apiRoutes.qmarketplace.store',
                select: {label: 'name', id: 'id'},
                requestParams: {filter: {storeId : this.$store.state.qmarketplaceStores.storeSelected}}
              },
            }
          },
          formRight: {
            status : {
              label: `${this.$tr('ui.form.status')}:`,
              value: 0,
              type: 'select',
              options: [
                {label: this.$tr('ui.label.enabled'), value: '1'},
                {label: this.$tr('ui.label.disabled'), value: '0'},
              ],
            },
            startDate:{
              label: this.$tr('qquiz.layout.form.startDate'),
              value: '',
              type: 'date',
              isTranslatable: false,
            },
            endDate:{
              label: this.$tr('qquiz.layout.form.endDate'),
              value: '',
              type: 'date',
              isTranslatable: false,
            },
            logged : {
              label: `${this.$tr('qquiz.layout.form.logged')}:`,
              value: 0,
              type: 'select',
              options: [
                {label: this.$tr('ui.label.yes'), value: '1'},
                {label: this.$tr('ui.label.no'), value: '0'},
              ],
            }
          }
        }
      }
    },
  }
</script>
