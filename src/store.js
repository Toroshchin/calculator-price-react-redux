import { createStore } from 'redux'
import initialState from './initialState'
import editAplication from './reducers/editAplication'

const store = createStore(editAplication, initialState)

export default store
