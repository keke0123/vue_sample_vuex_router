import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment(state){
            state.count++;
        }
    }
})

// store 는 주소창으로 이동시 reloading 되면서 초기화 됨으로 
// local store 같은 곳에 저장 하는 방식으로 써야겠다.