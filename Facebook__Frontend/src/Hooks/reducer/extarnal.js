//external api call

//action types aleady decleared
import { GET_ALL_POST, GET_SINGLE_POST } from '../../Functions/type'

export default function externalReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_POST:
console.log(action.value)     
      return [...action.value, ]
    case GET_SINGLE_POST:
      return [...state, action.payload]

    default:
      return
  }
}