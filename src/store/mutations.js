import {setToken, removeToken} from '../common/utils/localStorage'

export default {
  changeTransition(state, transitionName) {
    state.transitionName = transitionName
  },
  UPDATE_TOKEN(state, token) {
    setToken(token)
    state.token = token;
  },
  CLEAR_TOKEN(state) {
    removeToken();
    state.token = '';
  }
}
