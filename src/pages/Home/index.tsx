import { useContext } from "react";
import { HandPalm, Play } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { CyclesContext } from "@/contexts/CyclesContext";

import NewCycleForm from "@/pages/Home/components/NewCycleForm";
import CountDown from "@/pages/Home/components/CountDown";

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
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { watch, handleSubmit, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <S.Wrapper>
      <FormProvider {...newCycleForm}>
        <S.Form
          id="submitCountDown"
          onSubmit={handleSubmit(handleCreateNewCycle)}
        >
          <NewCycleForm />
        </S.Form>
      </FormProvider>
      <CountDown />

      {activeCycle ? (
        <S.StopCountDownButton type="button" onClick={interruptCurrentCycle}>
          <HandPalm size={24} />
          Interromper
        </S.StopCountDownButton>
      ) : (
        <S.StartCountDownButton
          type="submit"
          form="submitCountDown"
          disabled={isSubmitDisabled}
        >
          <Play size={24} />
          Começar
        </S.StartCountDownButton>
      )}
    </S.Wrapper>
  );
};

export default Home;
