<template>
  <div>
  <h4>Componente Answer</h4>
  <q-dialog
    v-model="dialogStatus"
    stack-buttons
    prevent-close
    @ok="onOk"
    @cancel="onCancel"
    @show="onShow"
    @hide="onHide"
  >
    <!-- This or use "title" prop on <q-dialog> -->
    <span slot="title">Answers</span>

    <div slot="body">
        <!---Component CRUD-->
        <crud :crud-data="import('@imagina/qquiz/_crud/answers')"/>
      
    </div>

    <template slot="buttons" slot-scope="props">
      <q-btn flat label="Close" @click="props.cancel" />
    </template>

  </q-dialog>
  </div>
</template>

<script>
export default {
  /*
  props:{
    question:{default:()=>{
      return {}
    }},
    visible: {default: true}
  },
  */
  props: [
    'question','visible'
  ],
  data () {
    return {
      customDialogModel: false,
      name: ''
    }
  },
  computed:{
    dialogStatus(){
      console.log('DialogStatus: '+this.visible)
      return this.visible
    },
    changeVisibleStatus(){
      this.visible = false
    }
  },
  methods: {
    // when props.ok() gets called
    onOk (data) { },

    // when props.cancel() gets called
    onCancel () { },

    // when we show it to the user
    onShow () { },

    // when it gets hidden
    onHide () { 
     //changeVisibleStatus()
      this.visible = false
      
    },


  }
}
</script>