import { Play } from "@phosphor-icons/react";

import * as S from "./styles";

const Home = () => (
  <S.Wrapper>
    <S.Form id="submitCountDown">
      <S.InputWrapper>
        <S.Label htmlFor="task">Vou trabalhar em</S.Label>
        <S.InputTask
          type="text"
          id="task"
          list="task-suggestions"
          placeholder="Dê um nome para o seu projeto"
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

    <S.Button type="submit" form="submitCountDown" disabled>
      <Play size={24} />
      Começar
    </S.Button>
  </S.Wrapper>
);

export default Home;
