import { createStore } from 'vuex';

const store = createStore({
    state: {
        personData: {
            name: "",
            age: ""
        },
        children: []
    },
    mutations: {
        setPersonData(state, { name, age }) {
            state.personData.name = name
            state.personData.age = age
        },
        setChildren(state, data) {
            state.children.push(data)
        },
        removeChildren(state, data) {
            const filteredChild = state.children.filter(child => child.id !== data)
            state.children = filteredChild
        },
        changeChildValue(state, data) {
            const updateChild = state.children.map(c => c.id === data.id ? data : c)
            state.children = updateChild
        },
        resetChildren(state) {
            state.children = []
        }
    },
    getters: {
        getPersonData(state) {
            return state.personData
        },
        getChildren(state) {
            return state.children
        }
    }
});

export default store;