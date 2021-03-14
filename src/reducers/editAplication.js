import initialState from '../initialState'
import Immutable from 'seamless-immutable'

export default function Store(state = Immutable(initialState), action) {
  switch (action.type) {
    case 'SHOW_MODULES':
      return state.set('showModules', true)

    case 'RESET_MODULES':
      let modules = state.education[state.activeEducation].minModules
      return state.set('quantityModules', modules)

    case 'SELECT_EDUCATION':
      console.log(state.activeEducation)
      state.set('showModules', true)
      console.log(state.showModules)
      return state.set('activeEducation', action.payload - 1)

    case 'SELECT_TYPE_EDUCATION':
      console.log('Тип образовательной организации: ' + state.activeTypeEducation)
      return state.set('activeTypeEducation', action.payload - 1)

    case 'SELECT_MODULE_EDUCATION':
      let moduls
      if (action.payload === true) {
        moduls = state.quantityModules + 1
      } else {
        moduls = state.quantityModules - 1
      }
      console.log('Модули: ' + state.quantityModules)
      return state.set('quantityModules', moduls)

    case 'READING_INPUT':
      let price
      for (let i = 0; i < state.education[state.activeEducation].prices[state.activeTypeEducation].length; i++) {
        if (
          state.education[state.activeEducation].prices[state.activeTypeEducation][i].minPeople <= action.payload &&
          state.education[state.activeEducation].prices[state.activeTypeEducation][i].maxPeople >= action.payload
        ) {
          price =
            state.education[state.activeEducation].prices[state.activeTypeEducation][i].price[state.quantityModules - 1]
        }
      }

      console.log('Люди' + action.payload)
      console.log('Цена' + state.fullPrice)
      return state.set('fullPrice', price)

    default:
      return state
  }
}
