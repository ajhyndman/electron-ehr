import Immutable from 'immutable';
import { connect } from 'react-redux';

import actions from '../actions';
import disconnectedEditorPanel from 'components/EditorPanel';
import disconnectedEditorTabs from 'components/UI/EditorTabs';
import disconnectedPatientSettingsModal from 'components/PatientSettingsModal';
import disconnectedTab from 'components/UI/Tab';
import disconnectedToggleField from 'components/UI/ToggleField';

export const EditorPanel = connect(
  (state) => ({
    editorState: state
      .get('editors')
      .get(state.get('activeTab'), Immutable.Map({ state: undefined }))
      .get('state'),
  }),
  (dispatch) => ({
    onChange(next) { dispatch(actions.EDIT(next)); },
    onTab(event) {
      event.preventDefault();
      dispatch(actions.MACRO());
    },
    onReturn() {
      dispatch(actions.NEW_LINE());
      return true;
    },
  })
)(disconnectedEditorPanel);

export const EditorTabs = connect(
  (state) => ({
    activeTab: state.get('activeTab'),
    tabList: state.get('editors').map((editor) => (
      `${editor.getIn(['patient', 'lastName'])}, ${editor.getIn(['patient', 'firstName'])}`
    )),
  })
)(disconnectedEditorTabs);

export const PatientSettingsModal = connect(
  (state) => ({
    open: state.get('patientSettingsOpen'),
    patient: state.getIn(['editors', state.get('activeTab'), 'patient']),
  }),
  (dispatch) => ({
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
  (dispatch) => ({
    onClick(tabKey) { dispatch(actions.ACTIVATE_TAB(tabKey)); },
    onRemove(tabKey) { dispatch(actions.REMOVE_TAB(tabKey)); },
  })
)(disconnectedTab);

export const ToggleField = connect(
  null,
  (dispatch) => ({
    onClick(entityKey) { dispatch(actions.TOGGLE(entityKey)); },
  })
)(disconnectedToggleField);
