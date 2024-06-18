import { useContext, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

import { CyclesContext } from "@/contexts/CyclesContext";
import * as S from "./styles";

const INTERVAL_SECONDS = 1000;

const CountDown = () => {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    setSecondsPassed,
    markActiveCycleIdForNull,
    markCurrentCycleAsFinished,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (!activeCycle) return;

    const interval = setInterval(() => {
      const differenceSeconds = differenceInSeconds(
        new Date(),
        activeCycle.startDate
      );

      if (differenceSeconds >= totalSeconds) {
        markCurrentCycleAsFinished();
      }

      if (activeCycle.finishedDate) {
        clearInterval(interval);
        markActiveCycleIdForNull();
        return;
      }

      setSecondsPassed(differenceSeconds);
    }, INTERVAL_SECONDS);

    return () => clearInterval(interval);
  }, [
    activeCycle,
    activeCycleId,
    totalSeconds,
    markCurrentCycleAsFinished,
    markActiveCycleIdForNull,
    setSecondsPassed,
  ]);

  useEffect(() => {
    document.title = `Ignite Timer - ${minutes}:${seconds}`;
  }, [activeCycle, minutes, seconds]);

  return (
    <S.Wrapper>
      <S.Counter>{minutes[0]}</S.Counter>
      <S.Counter>{minutes[1]}</S.Counter>
      <S.CounterSeparator>:</S.CounterSeparator>
      <S.Counter>{seconds[0]}</S.Counter>
      <S.Counter>{seconds[1]}</S.Counter>
    </S.Wrapper>
  );
};

export default CountDown;
