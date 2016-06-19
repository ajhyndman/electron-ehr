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
      .get(state.get('activeTab'))
      .get('state'),
  }),
  (dispatch) => ({
    onChange(next) { dispatch(actions.EDIT(next)); },
    onTab(event) {
      event.preventDefault();
      dispatch(actions.MACRO());
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
      dispatch(actions.CLOSEPATIENTSETTINGS());
    },
    onChange(value) {
      dispatch(actions.UPDATEPATIENT(value));
    },
  })
)(disconnectedPatientSettingsModal);

export const Tab = connect(
  null,
  (dispatch) => ({
    onClick(tabKey) { dispatch(actions.ACTIVATETAB(tabKey)); },
  })
)(disconnectedTab);

export const ToggleField = connect(
  null,
  (dispatch) => ({
    onClick(entityKey) { dispatch(actions.TOGGLE(entityKey)); },
  })
)(disconnectedToggleField);
