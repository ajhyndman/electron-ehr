

const actions = {
  ACTIVATETAB: (key) => ({ type: 'ACTIVATETAB', key }),
  CLOSETAB: (key) => ({ type: 'CLOSETAB', key }),
  EDIT: (next) => ({ type: 'EDIT', next }),
  MACRO: () => ({ type: 'MACRO' }),
  NEWTAB: (template) => ({ type: 'NEWTAB', template }),
  TOGGLE: (key) => ({ type: 'TOGGLE', key }),
};


export default actions;
