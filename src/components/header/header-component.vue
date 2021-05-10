<template>
  <div class="header">
    <div>{{ msg }}</div> <br>
    <slot/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world from vue component!'
    }
  }
}
</script>

<style scoped>
.header {
  color: blue;
  width: 100%;
  height: 50px;
}
</style>