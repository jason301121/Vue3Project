import axios from "axios";

export default {
    namespaced: true,
    state: {
        allProducts: [],
    },
    actions: {
        getAllProducts(context) {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
            context.commit('LOADING', true, { root: true });
            axios.get(api)
                .then((res) => {
                    context.commit('ALLPRODUCTS', res.data.products);
                    context.commit('LOADING', false, { root: true });
                    this.$MessageState(res, messageState);
                })
        },
    },
    mutations: {
        ALLPRODUCTS(state, payload) {
            state.allProducts = payload;
        },
    },
    getters: {
        allProducts(state) {
            return state.allProducts;
        },
    }
}