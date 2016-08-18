// @flow
import { RichUtils } from 'draft-js';
import type { Immutable } from 'seamless-immutable';

import createFromTemplate from 'draftUtils/createFromTemplate';
import expandMacro from 'draftUtils/expandMacro';
import removeEntity from 'draftUtils/removeEntity';
import type { Action } from 'actions';
import type { AppState, TabState } from 'store';


function reducer(state: Immutable<AppState>, action: Action): Immutable<AppState> {
  switch (action.type) {
  case 'ACTIVATE_TAB': {
    return state.set('activeTab', action.key);
  }
  case 'CLOSE_PATIENT_SETTINGS': {
    return state.set('patientSettingsOpen', false);
  }
  case 'EDIT': {
    return state.setIn(
      ['editors', state.activeTab, 'state'],
      action.next
    );
  }
  case 'INIT_TAB': {
    return state
      .set(
        'editors',
        state.editors.concat({
          patient: {
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            address: '',
          },
          state: null,
        })
      )
      .set('activeTab', state.editors.length);
  }
  case 'MACRO': {
    return state.setIn(
      ['editors', state.activeTab, 'state'],
      expandMacro(state.editors[state.activeTab].state)
    );
  }
  case 'NEW_LINE': {
    return state.setIn(
      ['editors', state.activeTab, 'state'],
      RichUtils.insertSoftNewline(
        state.editors[state.activeTab].state
      )
    );
  }
  case 'FINALIZE_TEMPLATE': {
    return state.setIn(
      ['editors', state.activeTab, 'state'],
      createFromTemplate(action.template)
    );
  }
  case 'OPEN_PATIENT_SETTINGS': {
    return state.set('patientSettingsOpen', true);
  }
  case 'REMOVE_TAB': {
    return state.set(
      'editors',
      state.editors.filter(
        (value: Immutable<Array<TabState>>, i: number): bool => (i !== action.key)
      )
    );
  }
  case 'TOGGLE': {
    return state.setIn(
      ['editors', state.activeTab, 'state'],
      removeEntity(state.editors[state.activeTab].state, action.key)
    );
  }
  case 'UPDATE_PATIENT': {
    return state.setIn(
      ['editors', state.activeTab, 'patient'],
      action.patient
    );
  }
  default: {
    return state;
  }
  }
}


export default reducer;
