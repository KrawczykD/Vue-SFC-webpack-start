<template>
  <div class="footer">
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
.footer {
  color: red;
  width: 100%;
  height: 50px;
}
</style>