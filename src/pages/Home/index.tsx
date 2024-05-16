import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Play } from "@phosphor-icons/react";
import * as zod from "zod";

import * as S from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo de 5 minutos.")
    .max(60, "O ciclo precisa ser de no máximo de 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

const Home = () => {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log("> [handleCreateNewCycle]", data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <S.Wrapper>
      <S.Form
        id="submitCountDown"
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
        <S.InputWrapper>
          <S.Label htmlFor="task">Vou trabalhar em</S.Label>
          <S.InputTask
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Projeto 5" />
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
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </S.InputWrapper>
      </S.Form>

      <S.CountDown>
        <S.Counter>0</S.Counter>
        <S.Counter>0</S.Counter>
        <S.CounterSeparator>:</S.CounterSeparator>
        <S.Counter>0</S.Counter>
        <S.Counter>0</S.Counter>
      </S.CountDown>

      <S.Button
        type="submit"
        form="submitCountDown"
        disabled={isSubmitDisabled}
      >
        <Play size={24} />
        Começar
      </S.Button>
    </S.Wrapper>
  );
};

export default Home;
