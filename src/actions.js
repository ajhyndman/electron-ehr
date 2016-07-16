// @flow


const actions = {
  ACTIVATETAB: (key: number): Object => ({ type: 'ACTIVATETAB', key }),
  CLOSETAB: (key: number): Object => ({ type: 'CLOSETAB', key }),
  CLOSEPATIENTSETTINGS: (): Object => ({ type: 'CLOSEPATIENTSETTINGS' }),
  EDIT: (next: Object): Object => ({ type: 'EDIT', next }),
  MACRO: (): Object => ({ type: 'MACRO' }),
  NEWLINE: (): Object => ({ type: 'NEWLINE' }),
  NEWTAB: (template: Object): Object => ({ type: 'NEWTAB', template }),
  OPENPATIENTSETTINGS: (): Object => ({ type: 'OPENPATIENTSETTINGS' }),
  REMOVETAB: (key: number): Object => ({ type: 'REMOVETAB', key }),
  TOGGLE: (key: number): Object => ({ type: 'TOGGLE', key }),
  UPDATEPATIENT: (patient: Object): Object => ({ type: 'UPDATEPATIENT', patient }),
};


export default actions;
