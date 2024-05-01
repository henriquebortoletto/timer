import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.colors.green[500]};
    color: ${theme.colors.white};
  `}
`;
