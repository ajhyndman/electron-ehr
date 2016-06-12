import expandMacro from 'draftUtils/expandMacro';
import removeEntity from 'draftUtils/removeEntity';


const reducer = function reducer(state, action) {
  switch (action.type) {
  case 'ACTIVATETAB': {
    return state.set('activeTab', action.key);
  }
  case 'EDIT': {
    return state.setIn(
      ['editors', state.get('activeTab'), 'state'],
      action.next
    );
  }
  case 'MACRO': {
    return state.setIn(
      ['editors', state.get('activeTab'), 'state'],
      expandMacro(state.getIn(['editors', state.get('activeTab'), 'state']))
    );
  }
  case 'TOGGLE': {
    return state.setIn(
      ['editors', state.get('activeTab'), 'state'],
      removeEntity(state.getIn(['editors', state.get('activeTab'), 'state']), action.key)
    );
  }
  default: {
    return state;
  }
  }
};


export default reducer;
