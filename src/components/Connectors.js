// @flow
import { EditorState } from 'draft-js';
import { Map } from 'immutable';
import { connect } from 'react-redux';

import actions from '../actions';
import disconnectedEditorPanel from 'components/EditorPanel';
import disconnectedEditorTabs from 'components/UI/EditorTabs';
import disconnectedPatientSettingsModal from 'components/PatientSettingsModal';
import disconnectedTab from 'components/UI/Tab';
import disconnectedToggleField from 'components/UI/ToggleField';
import type { Action } from '../actions';

export const EditorPanel = connect(
  (state: Map<string, any>) => ({
    editorState: state
      .get('editors')
      .get(state.get('activeTab'), Map({ state: undefined }))
      .get('state'),
  }),
  (dispatch: (action: Action) => void) => ({
    onChange(next: EditorState): void { dispatch(actions.EDIT(next)); },
    onTab(event: Event): void {
      event.preventDefault();
      dispatch(actions.MACRO());
    },
    onReturn(): boolean {
      dispatch(actions.NEW_LINE());
      return true;
    },
  })
)(disconnectedEditorPanel);

export const EditorTabs = connect(
  (state: Map<string, any>) => ({
    activeTab: state.get('activeTab'),
    tabList: state.get('editors').map((editor) => (
      `${editor.getIn(['patient', 'lastName'])}, ${editor.getIn(['patient', 'firstName'])}`
    )),
  })
)(disconnectedEditorTabs);

export const PatientSettingsModal = connect(
  (state: Map<string, any>) => ({
    open: state.get('patientSettingsOpen'),
    patient: state.getIn(['editors', state.get('activeTab'), 'patient']),
  }),
  (dispatch: (action: Action) => void) => ({
    onSubmit(event) {
      event.preventDefault();
      dispatch(actions.CLOSE_PATIENT_SETTINGS());
    },
    onChange(value) {
      dispatch(actions.UPDATE_PATIENT(value));
    },
  })
)(disconnectedPatientSettingsModal);

export const Tab = connect(
  null,
  (dispatch: (action: Action) => void) => ({
    onClick(tabKey) { dispatch(actions.ACTIVATE_TAB(tabKey)); },
    onRemove(tabKey) { dispatch(actions.REMOVE_TAB(tabKey)); },
  })
)(disconnectedTab);

export const ToggleField = connect(
  null,
  (dispatch: (action: Action) => void) => ({
    onClick(entityKey) { dispatch(actions.TOGGLE(entityKey)); },
  })
)(disconnectedToggleField);
