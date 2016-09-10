// @flow
import { EditorState } from 'draft-js';

import type { MacroList } from 'store';


export type ActionType =
  | 'ACTIVATE_TAB'
  | 'CLOSE_PATIENT_SETTINGS'
  | 'CLOSE_TAB'
  | 'COMMIT_TAB'
  | 'EDIT'
  | 'FINALIZE_TEMPLATE'
  | 'INIT_TAB'
  | 'MACROS_EDIT'
  | 'MACROS_EXPAND'
  | 'MACROS_NEW_LINE'
  | 'MACROS_OPEN'
  | 'MACROS_SAVE'
  | 'NEW_LINE'
  | 'NEW_TAB'
  | 'OPEN_PATIENT_SETTINGS'
  | 'REMOVE_TAB'
  | 'TOGGLE'
  | 'UPDATE_PATIENT';

export type Action = {
  type: ActionType;
  key?: number;
  macros?: MacroList;
  patient?: Object;
  template?: string;
  next?: EditorState;
}

const actions = {
  ACTIVATE_TAB: (key: number): Action => ({ type: 'ACTIVATE_TAB', key }),
  CLOSE_PATIENT_SETTINGS: (): Action => ({ type: 'CLOSE_PATIENT_SETTINGS' }),
  CLOSE_TAB: (key: number): Action => ({ type: 'CLOSE_TAB', key }),
  COMMIT_TAB: (): Action => ({ type: 'COMMIT_TAB' }),
  EDIT: (next: EditorState): Action => ({ type: 'EDIT', next }),
  FINALIZE_TEMPLATE: (template: string | void): Action => ({ type: 'FINALIZE_TEMPLATE', template }),
  INIT_TAB: (): Action => ({ type: 'INIT_TAB' }),
  MACROS_EDIT: (next: EditorState): Action => ({ type: 'MACROS_EDIT', next }),
  MACROS_EXPAND: (): Action => ({ type: 'MACROS_EXPAND' }),
  MACROS_NEW_LINE: (): Action => ({ type: 'MACROS_NEW_LINE' }),
  MACROS_OPEN: (): Action => ({ type: 'MACROS_OPEN' }),
  MACROS_SAVE: (): Action => ({ type: 'MACROS_SAVE' }),
  NEW_LINE: (): Action => ({ type: 'NEW_LINE' }),
  NEW_TAB: (template: string): Action => ({ type: 'NEW_TAB', template }),
  OPEN_PATIENT_SETTINGS: (): Action => ({ type: 'OPEN_PATIENT_SETTINGS' }),
  REMOVE_TAB: (key: number): Action => ({ type: 'REMOVE_TAB', key }),
  TOGGLE: (key: number): Action => ({ type: 'TOGGLE', key }),
  UPDATE_PATIENT: (patient: Object): Action => ({ type: 'UPDATE_PATIENT', patient }),
};


export default actions;
