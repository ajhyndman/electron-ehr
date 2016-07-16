import Immutable from 'immutable';
import { RichUtils } from 'draft-js';

import createFromTemplate from 'draftUtils/createFromTemplate';
import expandMacro from 'draftUtils/expandMacro';
import removeEntity from 'draftUtils/removeEntity';


const reducer = function reducer(state, action) {
  switch (action.type) {
  case 'ACTIVATE_TAB': {
    return state.set('activeTab', action.key);
  }
  case 'CLOSE_PATIENT_SETTINGS': {
    return state.set('patientSettingsOpen', false);
  }
  case 'EDIT': {
    return state.setIn(
      ['editors', state.get('activeTab'), 'state'],
      action.next
    );
  }
  case 'INIT_TAB': {
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
          state: null,
        }))
      )
      .set('activeTab', state.get('editors').size);
  }
  case 'MACRO': {
    return state.setIn(
      ['editors', state.get('activeTab'), 'state'],
      expandMacro(state.getIn(['editors', state.get('activeTab'), 'state']))
    );
  }
  case 'NEW_LINE': {
    return state.setIn(
      ['editors', state.get('activeTab'), 'state'],
      RichUtils.insertSoftNewline(
        state.getIn(['editors', state.get('activeTab'), 'state'])
      )
    );
  }
  case 'FINALIZE_TEMPLATE': {
    return state.setIn(
      ['editors', state.get('activeTab'), 'state'],
      createFromTemplate(action.template)
    );
  }
  case 'OPEN_PATIENT_SETTINGS': {
    return state.set('patientSettingsOpen', true);
  }
  case 'REMOVE_TAB': {
    return state.set('editors', state.get('editors').delete(action.key));
  }
  case 'TOGGLE': {
    return state.setIn(
      ['editors', state.get('activeTab'), 'state'],
      removeEntity(state.getIn(['editors', state.get('activeTab'), 'state']), action.key)
    );
  }
  case 'UPDATE_PATIENT': {
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
