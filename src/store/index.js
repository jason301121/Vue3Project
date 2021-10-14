import { createStore } from 'vuex';
import carts from './cart';
import products from './product';

export default createStore({
    state: {
        isLoading: false
    },
    actions: {
        updateLoading(context, status) {
            context.commit('LOADING', status)
        }
    },
    mutations: {
        LOADING(state, status) {
            state.isLoading = status
        }
    },
    getters: {},
    modules: {
        carts,
        products,
    }
})