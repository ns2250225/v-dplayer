import VDplayer from './v-dplayer.vue'
import '../../node_modules/dplayer/dist/DPlayer.min.css'

VDplayer.install = function(Vue) {
    Vue.component('VDplayer', VDplayer)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VDplayer)
}

export default VDplayer

