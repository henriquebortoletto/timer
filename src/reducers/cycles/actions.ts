import { Cycle } from "./reducer";

export enum ACTIONS_TYPE {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ACTIONS_TYPE.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function interruptCurrentCycleAction() {
  return {
    type: ACTIONS_TYPE.INTERRUPT_CURRENT_CYCLE,
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ACTIONS_TYPE.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}
