import { useState, useReducer, createContext, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

import {
  initialState,
  cyclesReducer,
  Cycle,
  CyclesState,
} from "@/reducers/cycles/reducer";

import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from "@/reducers/cycles/actions";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: React.ReactNode;
}

function initialReducer(initialState: CyclesState): CyclesState {
  const storageStateAsJSON = localStorage.getItem(
    "@ignite-timer:cycles:v1.0.0"
  );
  if (storageStateAsJSON) return JSON.parse(storageStateAsJSON);
  return initialState;
}

const CyclesContextProvider = ({ children }: CyclesContextProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    initialState,
    initialReducer
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (!activeCycle) return 0;
    const initialDifferenceSeconds = differenceInSeconds(
      new Date(),
      new Date(activeCycle.startDate)
    );
    return initialDifferenceSeconds;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@ignite-timer:cycles:v1.0.0", stateJSON);
  }, [cyclesState]);

  function createNewCycle(data: CreateCycleData) {
    const createNewCycleId = String(new Date().getTime());

    const newCycle: Cycle = {
      id: createNewCycleId,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        markCurrentCycleAsFinished,
        setSecondsPassed,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
};

export default CyclesContextProvider;
