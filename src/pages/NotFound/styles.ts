import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.6rem;
`;

export const InfoWrapper = styled.div`
  text-align: center;
`;

export const Subtitle = styled.h6`
  margin-bottom: 2.4rem;

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray[300]};
  `}
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;

  padding: 1.2rem 3.4rem;
  border-radius: 8px;
  transition: background-color 0.3s;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray[300]};
    background-color: ${theme.colors.green[500]};

    &:hover {
      background-color: ${theme.colors.green[300]};
    }
  `}
`;
