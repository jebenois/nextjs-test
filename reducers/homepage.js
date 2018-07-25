import { CONTENTFUL_SUCCESS } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case CONTENTFUL_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
      })
    default: return state
  }
}
