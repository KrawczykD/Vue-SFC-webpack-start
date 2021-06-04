<template>
  <div class="maincomponent">
    <b-button type="button" class="positin-relative" v-on:click="togglebookingopen()">X</b-button>
  </div>
</template>

<script lang="ts">


export default {

  mounted(){
    console.log("pull data from server")
  },

  data () {

  } , 

  methods: {

  },

  props:['togglebookingopen']
}
</script>

<style scoped>
.maincomponent {
  height: 95vh;
  width: 95vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  
}
</style>