import initialState from '../initialState'

export default function Store(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_EDUCATION':
      state.activeEducation = action.payload - 1
      console.log('Тип образования: ' + state.activeEducation)
      return state
    case 'SELECT_TYPE_EDUCATION':
      state.activeTypeEducation = action.payload - 1
      console.log('Тип образовательной организации: ' + state.activeTypeEducation)
      return state
    case 'SELECT_MODULE_EDUCATION':
      if (action.payload === true) {
        state.module++
      } else {
        state.module--
      }
      console.log('Модули: ' + state.module)
      return state
    case 'READING_INPUT':
      state.fullPeople = action.payload
      const store = state.education[state.activeEducation].prices[state.activeTypeEducation]
      const length = state.education[state.activeEducation].prices[state.activeTypeEducation].length
      for (let i = 0; i < length; i++) {
        if (store[i].minPeople <= action.payload && store[i].maxPeople >= action.payload) {
          state.fullPrice = store[i].price[state.module - 1]
        }
      }
      console.log(state.fullPrice)
      return state

    default:
      break
  }

  return state
}
