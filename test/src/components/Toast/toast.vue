<template lang="html">
  <div class="vue-toast" :class="`toast-${type}`">
    {{content}}
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String
    },
    type: {
      type: String
    }
  }
}
</script>

<style lang="css">
</style>
