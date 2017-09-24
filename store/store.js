import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
    notes:'main',
}

var mutations = {
    addNote(state, value){
        state.notes = value;
    },

}
const getters = {
    notes:state=> {
        return state.notes;
    },
};

export default new Vuex.Store({
    state,
    mutations,
    getters
})