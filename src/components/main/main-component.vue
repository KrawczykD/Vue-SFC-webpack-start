<template>
  <div class="example">
    {{ msg }} <slot></slot>
    <button v-on:click="clickTest">click to see test consolelog</button>
  </div>
</template>

<script lang="ts">

import Itest from '../../services/interface'

export default {

  data () {
    return {
      msg: 'Hello world from vue component! main',
      test : "" as string
    }
  } , 

  methods: {
    clickTest: function(){
      this.test = {age:22 , name: "dam"} as Itest
      console.log(this.test)
    }
  }
}
</script>

<style>
.example {
  color: green;
  width: 100%;
  height: 50px;
}
</style>