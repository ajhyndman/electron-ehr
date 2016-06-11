

const actions = {
  EDIT: (next) => ({ type: 'EDIT', next }),
  MACRO: () => ({ type: 'MACRO' }),
  TOGGLE: (key) => ({ type: 'TOGGLE', key }),
};


export default actions;
