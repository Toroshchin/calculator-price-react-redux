export const selectEducation = options => {
  console.log(options.text)
  return {
    type: 'SELECT_EDUCATION',
    payload: options,
  }
}
