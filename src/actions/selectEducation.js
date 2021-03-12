export const selectEducation = option => {
  return {
    type: 'SELECT_EDUCATION',
    payload: option.value,
  }
}
