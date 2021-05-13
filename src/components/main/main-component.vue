<template>
  <div class="example">
    {{ msg }} <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world from vue component! main'
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