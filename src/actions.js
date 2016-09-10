// @flow
import { EditorState } from 'draft-js';

import type { MacroList } from 'store';


export type ActionType =
  | 'ACTIVATE_TAB'
  | 'CLOSE_TAB'
  | 'CLOSE_PATIENT_SETTINGS'
  | 'EDIT'
  | 'FINALIZE_TEMPLATE'
  | 'INIT_TAB'
  | 'MACROS_EDIT'
  | 'MACROS_EXPAND'
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
  CLOSE_TAB: (key: number): Action => ({ type: 'CLOSE_TAB', key }),
  CLOSE_PATIENT_SETTINGS: (): Action => ({ type: 'CLOSE_PATIENT_SETTINGS' }),
  EDIT: (next: EditorState): Action => ({ type: 'EDIT', next }),
  FINALIZE_TEMPLATE: (template: string | void): Action => ({ type: 'FINALIZE_TEMPLATE', template }),
  INIT_TAB: (): Action => ({ type: 'INIT_TAB' }),
  MACROS_EDIT: (): Action => ({ type: 'MACROS_EDIT' }),
  MACROS_EXPAND: (): Action => ({ type: 'MACROS_EXPAND' }),
  MACROS_SAVE: (macros: {}): Action => ({ type: 'MACROS_SAVE', macros }),
  NEW_LINE: (): Action => ({ type: 'NEW_LINE' }),
  NEW_TAB: (template: string): Action => ({ type: 'NEW_TAB', template }),
  OPEN_PATIENT_SETTINGS: (): Action => ({ type: 'OPEN_PATIENT_SETTINGS' }),
  REMOVE_TAB: (key: number): Action => ({ type: 'REMOVE_TAB', key }),
  TOGGLE: (key: number): Action => ({ type: 'TOGGLE', key }),
  UPDATE_PATIENT: (patient: Object): Action => ({ type: 'UPDATE_PATIENT', patient }),
};


export default actions;
