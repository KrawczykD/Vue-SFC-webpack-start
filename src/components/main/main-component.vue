<template>
  <div class="maincomponent">
    <button v-on:click="clickTest">click to see test consolelog</button>
  </div>
</template>

<script lang="ts">


export default {

  data () {

  } , 

  methods: {

  }
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