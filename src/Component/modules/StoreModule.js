import { OPENMODAL, CLOSEMODAL } from './type';

export const openmodal = () => ({ type: OPENMODAL});
export const closemodal = () => ({ type: CLOSEMODAL });

const initialState = false

export default function showmodal(state = initialState, action) {
    switch (action.type) {
      case OPENMODAL:
        return state = true;
      case CLOSEMODAL:
        return state = false;
      default:
        return state;
    }
}