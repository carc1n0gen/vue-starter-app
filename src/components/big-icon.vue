<template>
<div class="big-icon">
  <span v-bind:class="`glyphicon glyphicon-${icon}`"></span>
</div>
</template>

<script>
export default {
  props: [
    'icon'  
  ]
}
</script>

<style>
.big-icon {
  margin-bottom: 10px;
  display: block;
  text-align: center;
  font-size: 100px;
}
</style>