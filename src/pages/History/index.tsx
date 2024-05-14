import * as S from "./styles";

const History = () => (
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
          <tr>
            <S.TableCell>Conserto de débitos técnicos</S.TableCell>
            <S.TableCell>25 minutos</S.TableCell>
            <S.TableCell>Há cerca de 2 meses</S.TableCell>
            <S.TableCell>
              <S.Status color="yellow">Em andamento</S.Status>
            </S.TableCell>
          </tr>
          <tr>
            <S.TableCell>Conserto de débitos técnicos</S.TableCell>
            <S.TableCell>25 minutos</S.TableCell>
            <S.TableCell>Há cerca de 2 meses</S.TableCell>
            <S.TableCell>
              <S.Status color="red">Interrompido</S.Status>
            </S.TableCell>
          </tr>
          <tr>
            <S.TableCell>Conserto de débitos técnicos</S.TableCell>
            <S.TableCell>25 minutos</S.TableCell>
            <S.TableCell>Há cerca de 2 meses</S.TableCell>
            <S.TableCell>
              <S.Status color="green">Concluído</S.Status>
            </S.TableCell>
          </tr>
          <tr>
            <S.TableCell>Conserto de débitos técnicos</S.TableCell>
            <S.TableCell>25 minutos</S.TableCell>
            <S.TableCell>Há cerca de 2 meses</S.TableCell>
            <S.TableCell>
              <S.Status color="red">Interrompido</S.Status>
            </S.TableCell>
          </tr>
          <tr>
            <S.TableCell>Conserto de débitos técnicos</S.TableCell>
            <S.TableCell>25 minutos</S.TableCell>
            <S.TableCell>Há cerca de 2 meses</S.TableCell>
            <S.TableCell>
              <S.Status color="green">Concluído</S.Status>
            </S.TableCell>
          </tr>
          <tr>
            <S.TableCell>Conserto de débitos técnicos</S.TableCell>
            <S.TableCell>25 minutos</S.TableCell>
            <S.TableCell>Há cerca de 2 meses</S.TableCell>
            <S.TableCell>
              <S.Status color="red">Interrompido</S.Status>
            </S.TableCell>
          </tr>
          <tr>
            <S.TableCell>Conserto de débitos técnicos</S.TableCell>
            <S.TableCell>25 minutos</S.TableCell>
            <S.TableCell>Há cerca de 2 meses</S.TableCell>
            <S.TableCell>
              <S.Status color="green">Concluído</S.Status>
            </S.TableCell>
          </tr>
        </tbody>
      </S.Table>
    </S.TableWrapper>
  </S.Wrapper>
);

export default History;
