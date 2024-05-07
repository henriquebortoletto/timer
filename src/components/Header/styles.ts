import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 0.8rem;
`;

export const Link = styled(NavLink)`
  line-height: 0;
  padding: 0.9rem 1.2rem;

  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  transition: all 0.3s;

  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};

    &.active {
      color: ${theme.colors.green[300]};
    }

    &:hover,
    &.active {
      border-bottom-color: ${theme.colors.green[300]};
    }
  `}
`;
