import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        products: [
            {
                img: 'http://televisionmania.ru/wp-content/uploads/2016/01/11116.jpg',
                name: 'Товар 1',
                text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: '100'
            },
            {
                img: 'http://televisionmania.ru/wp-content/uploads/2016/01/11116.jpg',
                name: 'Товар 2',
                text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: '10'
            },
            {
                img: 'http://televisionmania.ru/wp-content/uploads/2016/01/11116.jpg',
                name: 'Товар 3',
                text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: '10 000'
            },
            {
                img: 'http://televisionmania.ru/wp-content/uploads/2016/01/11116.jpg',
                name: 'Товар 4',
                text: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: '1000'
            }
        ],
        selects: ['По цене min', 'По цене max', 'По наименованию']
    },
    mutations: {
        DELETE_PRODUCT: (state, i) => {
            setTimeout(function(){state.products.splice(i, 1)}, 1000)
        },
        NEW_PRODUCT: (state, product) => {
            state.products.push(product)
        },
        SORT_DATA: (state, i) => {
            if (i == 0) {
                state.products.sort((min, max) => parseInt(min.price.replace(/\D/g, '')) - parseInt(max.price.replace(/\D/g, '')))
            } else if (i == 1) {
                state.products.sort((min, max) => parseInt(max.price.replace(/\D/g, '')) - parseInt(min.price.replace(/\D/g, '')))
            } else {
                state.products.sort((min, max) => {
                    if (min.name < max.name) return -1
                    if (min.name < max.name) return 1
                })
            }
        }
    },
    actions: {
        REMOVE_PRODUCT({commit}, i) {
            commit('DELETE_PRODUCT', i)
        },
        ADD_PRODUCT({commit}, product) {
            commit('NEW_PRODUCT', product)
        },
        SORT({commit}, i) {
            commit('SORT_DATA', i)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        SELECTS(state) {
            return state.selects
        }
    }
})

export default store