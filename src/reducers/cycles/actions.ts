import { Cycle } from "./reducer";

export enum ACTIONS_TYPE {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

interface newCycleActionProps {
  type: ACTIONS_TYPE.ADD_NEW_CYCLE;
  payload: {
    newCycle: Cycle;
  };
}

interface markCurrentCycleFinishedProps {
  type: ACTIONS_TYPE.MARK_CURRENT_CYCLE_AS_FINISHED;
}

interface interruptedCycleActionProps {
  type: ACTIONS_TYPE.INTERRUPT_CURRENT_CYCLE;
}

export type ActionsTypeProps =
  | newCycleActionProps
  | markCurrentCycleFinishedProps
  | interruptedCycleActionProps;

export function addNewCycleAction(newCycle: Cycle): newCycleActionProps {
  return {
    type: ACTIONS_TYPE.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function interruptCurrentCycleAction(): interruptedCycleActionProps {
  return {
    type: ACTIONS_TYPE.INTERRUPT_CURRENT_CYCLE,
  };
}

export function markCurrentCycleAsFinishedAction(): markCurrentCycleFinishedProps {
  return {
    type: ACTIONS_TYPE.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}
