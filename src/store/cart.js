import axios from "axios";

export default {
    namespaced: true,
    state: {
        cart: [],
        cartLength: 0,
    },
    actions: {
        getCart(context) {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            context.commit('LOADING', true, { root: true });
            axios.get(api)
                .then((res) => {
                    context.commit('CART', res.data.data);
                    context.commit('CARTLENGTH', res.data.data.carts.length);
                    context.commit('LOADING', false, { root: true });
                })
        },
        addCart(context, { id, qty }) {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            context.commit('LOADING', true, { root: true })
            const cart = {
                product_id: id,
                qty: qty,
            };
            axios.post(api, { data: cart })
                .then((res) => {
                    context.dispatch('getCart');
                    context.commit('LOADING', false, { root: true });
                })
        },
        delCart(context, id) {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
            context.commit('LOADING', true, { root: true });
            axios.delete(api)
                .then((resolve) => {
                    context.dispatch('getCart');
                    context.commit('LOADING', false, { root: true });
                })
        },
    },
    mutations: {
        CART(state, payload) {
            state.cart = payload;
        },
        CARTLENGTH(state, payload) {
            state.cartLength = payload;
        }
    },
    getters: {
        cart(state) {
            return state.cart;
        },
        cartLength(state) {
            return state.cartLength;
        }
    }
}