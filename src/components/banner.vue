<template>
<div class="jumbotron">
  <h1>{{title}}</h1>
  <p>
    <span v-if="subtitle !== null">{{subtitle}}</span>
    &nbsp;
    <button v-if="clickHandler !== null" @click="clickHandler" class="btn btn-primary">Click me</button>
  </p>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    clickHandler: {
      type: Function,
      required: false
    }
  }
}
</script>