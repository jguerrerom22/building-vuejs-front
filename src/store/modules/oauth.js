
export default {
  namespaced: true,
  state: {
    authenticated: false,
    email: null
  },
  mutations: {
    setAuthenticated: (state, payload) => {
      state.authenticated = payload
    },
    setEmail (state, payload) {
      state.email = payload
    }
  },
  getters: {
    isAuthenticated: state => state.authenticated
  },
  actions: {
    login: (context, payload) => {
      // axios.defaults.headers.common['Authorization'] = token
      context.commit('setAuthenticated', true)
      context.commit('setEmail', payload)
    },
    logout: context => {
      // delete axios.defaults.headers.common['Authorization']
      context.commit('setAuthenticated', false)
      context.commit('setEmail', null)
    }
  }
}
