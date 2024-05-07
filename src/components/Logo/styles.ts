import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Link = styled(NavLink)`
  line-height: 0;

  ${({ theme }) => css`
    color: ${theme.colors.green[300]};
  `}
`;
