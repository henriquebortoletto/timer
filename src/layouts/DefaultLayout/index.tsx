import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
import * as S from "./styles";

const DefaultLayout = () => (
  <S.Container>
    <S.Wrapper>
      <Header />
      <Outlet />
    </S.Wrapper>
  </S.Container>
);

export default DefaultLayout;
