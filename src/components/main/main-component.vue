<template>
  <div class="example">
    {{ msg }} <slot/>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      msg: 'Hello world from vue component!'
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