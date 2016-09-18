// @flow
import I from 'seamless-immutable';
import { EditorState } from 'draft-js';
import { connect } from 'react-redux';
import type { Immutable } from 'seamless-immutable';

import actions from '../actions';
import disconnectedEditorPanel from 'components/EditorPanel';
import disconnectedEditorTabs from 'components/UI/EditorTabs';
import disconnectedPatientSettingsModal from 'components/PatientSettingsModal';
import disconnectedSettingsEditorPanel from 'components/SettingsEditorPanel';
import disconnectedTab from 'components/UI/Tab';
import disconnectedToggleButton from 'components/UI/ToggleButton';
import type { Action } from '../actions';
import type { AppState, Patient, TabState } from '../store';

type Dispatch = (action: Action) => void;

export const EditorPanel = connect(
  (state: Immutable<AppState>): Object => ({
    editorState: (state.editors[state.activeTab] || { state: undefined }).state,
    macroSettingsOpen: state.macroSettingsOpen,
  }),
  (dispatch: Dispatch): Object => ({
    onChange(next: EditorState): void { dispatch(actions.EDIT(next)); },
    onTab(event: Event): void {
      event.preventDefault();
      dispatch(actions.MACROS_EXPAND());
    },
    onReturn(): boolean {
      dispatch(actions.NEW_LINE());
      return true;
    },
  })
)(disconnectedEditorPanel);

export const EditorTabs = connect(
  (state: Immutable<AppState>): Object => ({
    activeTab: state.activeTab,
    tabList: state.editors.map((editor: Immutable<TabState>): string => (
      `${editor.patient.lastName}, ${editor.patient.firstName}`
    )),
  })
)(disconnectedEditorTabs);

export const PatientSettingsModal = connect(
  (state: Immutable<AppState>): Object => ({
    open: state.patientSettingsOpen,
    patient: (state.editors[state.activeTab] || I.from({ patient: undefined })).patient,
  }),
  (dispatch: Dispatch): Object => ({
    onSubmit(event: Event): void {
      event.preventDefault();
      dispatch(actions.CLOSE_PATIENT_SETTINGS());
    },
    onChange(value: Immutable<Patient>): void {
      dispatch(actions.UPDATE_PATIENT(value));
    },
  })
)(disconnectedPatientSettingsModal);

export const SettingsEditorPanel = connect(
  (state: Immutable<AppState>): Object => ({
    editorState: state.macroSettingsEditorState,
    macroSettingsOpen: state.macroSettingsOpen,
  }),
  (dispatch: Dispatch): Object => ({
    onChange(next: EditorState): void { dispatch(actions.MACROS_EDIT(next)); },
    onReturn(): boolean {
      dispatch(actions.MACROS_NEW_LINE());
      return true;
    },
    onSave(): void { dispatch(actions.MACROS_SAVE()); },
  })
)(disconnectedSettingsEditorPanel);

export const Tab = connect(
  null,
  (dispatch: Dispatch): Object => ({
    onClick(tabKey: number): void { dispatch(actions.ACTIVATE_TAB(tabKey)); },
    onRemove(tabKey: number): void { dispatch(actions.REMOVE_TAB(tabKey)); },
  })
)(disconnectedTab);

export const ToggleButton = connect(
  null,
  (dispatch: Dispatch): Object => ({
    onClick(entityKey: number): void { dispatch(actions.TOGGLE(entityKey)); },
  })
)(disconnectedToggleButton);
