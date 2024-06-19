import { useContext } from "react";

import { CyclesContext } from "@/contexts/CyclesContext";
import * as S from "./styles";

const History = () => {
  const { cycles } = useContext(CyclesContext);

  return (
    <S.Wrapper>
      <S.Title>Meu histórico</S.Title>
      <S.TableWrapper>
        <S.Table>
          <thead>
            <tr>
              <S.TableTh>Tarefa</S.TableTh>
              <S.TableTh>Duração</S.TableTh>
              <S.TableTh>Início</S.TableTh>
              <S.TableTh>Status</S.TableTh>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <S.TableCell>{cycle.task}</S.TableCell>
                <S.TableCell>{cycle.minutesAmount} minutos</S.TableCell>
                <S.TableCell>{cycle.startDate.toISOString()}</S.TableCell>
                <S.TableCell>
                  {cycle.finishedDate && (
                    <S.Status color="green">Concluído</S.Status>
                  )}

                  {cycle.interruptedDate && (
                    <S.Status color="red">Interrompido</S.Status>
                  )}

                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <S.Status color="yellow">Em andamento</S.Status>
                  )}
                </S.TableCell>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>
    </S.Wrapper>
  );
};

export default History;
