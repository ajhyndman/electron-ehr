import Immutable from 'immutable';

import createFromTemplate from 'draftUtils/createFromTemplate';
import expandMacro from 'draftUtils/expandMacro';
import removeEntity from 'draftUtils/removeEntity';


const reducer = function reducer(state, action) {
  switch (action.type) {
  case 'ACTIVATETAB': {
    return state.set('activeTab', action.key);
  }
  case 'CLOSEPATIENTSETTINGS': {
    return state.set('patientSettingsOpen', false);
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
  case 'NEWTAB': {
    return state
      .set(
        'editors',
        state.get('editors').push(Immutable.Map({
          patient: Immutable.Map({
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            address: '',
          }),
          state: createFromTemplate(action.template),
        }))
      )
      .set('activeTab', state.get('editors').size)
      .set('patientSettingsOpen', true);
  }
  case 'OPENPATIENTSETTINGS': {
    return state.set('patientSettingsOpen', true);
  }
  case 'REMOVETAB': {
    return state.set('editors', state.get('editors').delete(action.key));
  }
  case 'TOGGLE': {
    return state.setIn(
      ['editors', state.get('activeTab'), 'state'],
      removeEntity(state.getIn(['editors', state.get('activeTab'), 'state']), action.key)
    );
  }
  case 'UPDATEPATIENT': {
    return state.setIn(
      ['editors', state.get('activeTab'), 'patient'],
      action.patient
    );
  }
  default: {
    return state;
  }
  }
};


export default reducer;
