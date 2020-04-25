import Vuex from 'vuex'
import md5 from 'md5'

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      user: null,
      category: '',
      loading: false,
      country: 'us',
      token: ''
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines
      },
      setLoading(state, loading) {
        state.loading = loading
      },
      setUser(state, user) {
        state.user = user
      },
      setCategory(state, category) {
        state.category = category
      },
      setCountry(state, country) {
        state.country = country
      },
      setToken(state, token) {
        state.token = token
      }
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit('setLoading', true)
        const { articles } = await this.$axios.$get(apiUrl)
        commit('setLoading', false)
        commit('setHeadlines', articles)
      },
      async authenticateUser({ commit }, userPayload) {
        try {
          commit('setLoading', true)
          const authUserData = await this.$axios.$post(
            `/${userPayload.action}/`,
            {
              email: userPayload.email,
              password: userPayload.password,
              returnSecureToken: userPayload.returnSecureToken
            }
          )
          console.log(authUserData)

          const avatar = `http://gravatar.com/avatar/${md5(
            authUserData.email
          )}?d=identicon`
          const user = { email: authUserData.email, avatar }
          commit('setUser', user)
          commit('setToken', authUserData)
          commit('setLoading', false)
        } catch (err) {
          console.error(err)
          commit('setLoading', false)
        }
      }
    },
    getters: {
      headlines: state => state.headlines,
      loading: state => state.loading,
      user: state => state.user,
      category: state => state.category,
      country: state => state.country,
      isAuthenticated: state => !!state.token
    }
  })
}

export default createStore
