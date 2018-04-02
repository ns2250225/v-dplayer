<template>
    <div id="dplayer"></div>
</template>
<script>
import DPlayer from 'DPlayer'
export default {
  name: 'VDplayer',
  props: {
    options: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      dp: null
    }
  },
  methods: {
  },
  mounted() {
    this.options.container = document.getElementById('dplayer')
    this.dp = new DPlayer(this.options)
  }
}
</script>