import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    isPlay: false,
    isShowPage: false,
    currentID: 0
}
const mutations = {
    play(state, id) {
        state.isPlay = true
        state.currentID = id
    },
    showPage(state) {
        state.isShowPage = true
    },
    closePage(state) {
        state.isShowPage = false
    }
}
export default new Vuex.Store({
    state,
    mutations
})
