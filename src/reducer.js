import expandMacro from 'draftUtils/expandMacro';
import removeEntity from 'draftUtils/removeEntity';


const reducer = function reducer(state, action) {
  switch (action.type) {
  case 'EDIT': {
    return state.set('editor', action.next);
  }
  case 'MACRO': {
    return state.set(
      'editor',
      expandMacro(state.get('editor'))
    );
  }
  case 'TOGGLE': {
    return state.set(
      'editor',
      removeEntity(state.get('editor'), action.key)
    );
  }
  default: {
    return state;
  }
  }
};


export default reducer;
