<template>
  <q-dialog
    v-model="customDialogModel"
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
</template>

<script>
export default {
  props:{
    question:{default:()=>{
      return {}
    }},
    visible: {default: true}
  },
  data () {
    console.log(this.visible)
    console.log(this.question)
    return {
      // model for Dialog example
      customDialogModel: this.visible,
      name: ''
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
    onHide () { },

  }
}
</script>