import DraftJS from 'draft-js';


const keybindings = function keybindings(e) {
  if (e.keyCode === 9) {
    return 'macro';
  }
  return DraftJS.getDefaultKeyBinding(e);
};


export default keybindings;
