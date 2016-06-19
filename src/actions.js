

const actions = {
  ACTIVATETAB: (key) => ({ type: 'ACTIVATETAB', key }),
  CLOSETAB: (key) => ({ type: 'CLOSETAB', key }),
  CLOSEPATIENTSETTINGS: () => ({ type: 'CLOSEPATIENTSETTINGS' }),
  EDIT: (next) => ({ type: 'EDIT', next }),
  MACRO: () => ({ type: 'MACRO' }),
  NEWTAB: (template) => ({ type: 'NEWTAB', template }),
  TOGGLE: (key) => ({ type: 'TOGGLE', key }),
  UPDATEPATIENT: (patient) => ({ type: 'UPDATEPATIENT', patient }),
};


export default actions;
