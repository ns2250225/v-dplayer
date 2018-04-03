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
    const player = this.dp = new DPlayer(this.options)
    const events = player.events
    Object.keys(events).forEach(item => {
      if (item === 'events') {
        return false
      } else {
        events[item].forEach(event => {
          player.on(event, () => this.$emit(event))
        })
      }
    })
  }
}
</script>
<style scoped>
  @import url("../../node_modules/dplayer/dist/DPlayer.min.css");
</style>