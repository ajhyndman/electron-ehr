// @flow
import jsonPretty from 'json-pretty';
import { ContentState, EditorState, Entity, RichUtils } from 'draft-js';
import type { Immutable } from 'seamless-immutable';

import createFromTemplate from 'draftUtils/createFromTemplate';
import expandMacro from 'draftUtils/expandMacro';
import replaceEntity from 'draftUtils/replaceEntity';
import stripInactiveToggles from 'draftUtils/stripInactiveToggles';
import stripToggleGroups from 'draftUtils/stripToggleGroups';
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
  case 'COMMIT_TAB': {
    const currentState = state.editors[state.activeTab].state;
    const currentContent = currentState.getCurrentContent();

    // Strip inactive toggles.
    const noToggles = stripInactiveToggles(currentContent);

    // Strip inactive toggle groups.
    const noGroups = stripToggleGroups(noToggles);

    // Strip all entity metadata.
    const currentText = noGroups.getPlainText();
    const nextContent = ContentState.createFromText(currentText);

    return state.setIn(
      ['editors', state.activeTab, 'state'],
      EditorState.push(currentState, nextContent, 'change-block-data')
    );
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
  case 'MACROS_EDIT': {
    return state.set(
      'macroSettingsEditorState',
      action.next
    );
  }
  case 'MACROS_EXPAND': {
    return state.setIn(
      ['editors', state.activeTab, 'state'],
      expandMacro(
        state.editors[state.activeTab].state,
        state.macros,
        state.editors[state.activeTab].patient
      )
    );
  }
  case 'MACROS_NEW_LINE': {
    return state.set(
      'macroSettingsEditorState',
      RichUtils.insertSoftNewline(
        state.macroSettingsEditorState
      )
    );
  }
  case 'MACROS_OPEN': {
    return state
      .set('macroSettingsOpen', true)
      .set(
        'macroSettingsEditorState',
        EditorState.createWithContent(
          ContentState.createFromText(jsonPretty(state.macros))
        )
      );
  }
  case 'MACROS_SAVE': {
    return state
      .set('macroSettingsOpen', false)
      .set(
        'macroSettingsEditorState',
        EditorState.createEmpty()
      )
      .set(
        'macros',
        JSON.parse(state.macroSettingsEditorState.getCurrentContent().getPlainText())
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
      createFromTemplate(action.template, state.editors[state.activeTab].patient)
    );
  }
  case 'OPEN_PATIENT_SETTINGS': {
    return state.set('patientSettingsOpen', true);
  }
  case 'REMOVE_TAB': {
    return state.set(
      'editors',
      state.editors.filter(
        (value: Immutable<TabState>, i: number): bool => (i !== action.key)
      )
    );
  }
  case 'TOGGLE': {
    const toggle = Entity.get(action.key);
    const updated = Entity.replaceData(
      action.key,
      {
        active: !toggle.getIn(['data']).active,
      }
    );
    const newKey = Entity.add(updated);
    return state.setIn(
      ['editors', state.activeTab, 'state'],
      replaceEntity(state.editors[state.activeTab].state, action.key, newKey)
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
