import { produce } from "immer";
import { ACTIONS_TYPE } from "./actions";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export const initialState: CyclesState = {
  cycles: [],
  activeCycleId: null,
};

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ACTIONS_TYPE.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });

    case ACTIONS_TYPE.INTERRUPT_CURRENT_CYCLE:
      // eslint-disable-next-line no-case-declarations
      const interruptCurrentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });
      if (interruptCurrentCycleIndex < 0) return state;
      return produce(state, (draft) => {
        draft.cycles[interruptCurrentCycleIndex].interruptedDate = new Date();
        draft.activeCycleId = null;
      });

    case ACTIONS_TYPE.MARK_CURRENT_CYCLE_AS_FINISHED:
      // eslint-disable-next-line no-case-declarations
      const finishedCurrentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });
      if (finishedCurrentCycleIndex < 0) return state;
      return produce(state, (draft) => {
        draft.cycles[finishedCurrentCycleIndex].finishedDate = new Date();
        draft.activeCycleId = null;
      });
    default:
      return state;
  }
}
