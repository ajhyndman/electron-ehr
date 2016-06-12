

const actions = {
  ACTIVATETAB: (key) => ({ type: 'ACTIVATETAB', key }),
  CLOSETAB: (key) => ({ type: 'CLOSETAB', key }),
  EDIT: (next) => ({ type: 'EDIT', next }),
  MACRO: () => ({ type: 'MACRO' }),
  TOGGLE: (key) => ({ type: 'TOGGLE', key }),
};


export default actions;
