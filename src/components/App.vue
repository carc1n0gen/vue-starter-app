<template>
<div>
  <navigation></navigation>
  <transition name="fade">
     <router-view></router-view>
  </transition>
</div>
</template>

<script>
import navigation from './navigation'

export default {
  components: {
    'navigation': navigation
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
