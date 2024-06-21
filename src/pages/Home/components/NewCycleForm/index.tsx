import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { CyclesContext } from "@/contexts/CyclesContext";
import * as S from "./styles";

const NewCycleForm = () => {
  const { activeCycle, cycles } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <>
      <S.InputWrapper>
        <S.Label htmlFor="task">Vou trabalhar em</S.Label>
        <S.InputTask
          type="text"
          id="task"
          list="task-suggestions"
          placeholder="Dê um nome para o seu projeto"
          disabled={!!activeCycle}
          {...register("task")}
        />
        <datalist id="task-suggestions">
          {cycles.map((cycle) => (
            <option key={cycle.id} value={cycle.task} />
          ))}
        </datalist>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label htmlFor="minutesAmount">durante</S.Label>
        <S.InputMinutes
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register("minutesAmount", { valueAsNumber: true })}
        />
        <span>minutos.</span>
      </S.InputWrapper>
    </>
  );
};

export default NewCycleForm;
