import { Scroll, Timer } from "@phosphor-icons/react";

import Logo from "@/components/Logo";
import * as S from "./styles";

const Header = () => (
  <S.Wrapper>
    <Logo />
    <S.Nav>
      <S.Link to="/">
        <Timer size={24} />
      </S.Link>
      <S.Link to="/history">
        <Scroll size={24} />
      </S.Link>
    </S.Nav>
  </S.Wrapper>
);

export default Header;
