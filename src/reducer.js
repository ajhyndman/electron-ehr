

const reducer = function reducer(state, action) {
  switch (action.type) {
  case 'EDIT':
    return state.set('editor', action.next);
  default:
    return state;
  }
};


export default reducer;
