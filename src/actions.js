// @flow


const actions = {
  ACTIVATE_TAB: (key: number): Object => ({ type: 'ACTIVATE_TAB', key }),
  CLOSE_TAB: (key: number): Object => ({ type: 'CLOSE_TAB', key }),
  CLOSE_PATIENT_SETTINGS: (): Object => ({ type: 'CLOSE_PATIENT_SETTINGS' }),
  EDIT: (next: Object): Object => ({ type: 'EDIT', next }),
  FINALIZE_TEMPLATE: (template: Object): Object => ({ type: 'FINALIZE_TEMPLATE', template }),
  INIT_TAB: (): Object => ({ type: 'INIT_TAB' }),
  MACRO: (): Object => ({ type: 'MACRO' }),
  NEW_LINE: (): Object => ({ type: 'NEW_LINE' }),
  NEW_TAB: (template: Object): Object => ({ type: 'NEW_TAB', template }),
  OPEN_PATIENT_SETTINGS: (): Object => ({ type: 'OPEN_PATIENT_SETTINGS' }),
  REMOVE_TAB: (key: number): Object => ({ type: 'REMOVE_TAB', key }),
  TOGGLE: (key: number): Object => ({ type: 'TOGGLE', key }),
  UPDATE_PATIENT: (patient: Object): Object => ({ type: 'UPDATE_PATIENT', patient }),
};


export default actions;
