import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 5.6rem;
`;

export const Counter = styled.span`
  font-size: 16rem;
  font-style: normal;
  font-weight: 700;
  line-height: 13rem;

  border-radius: 8px;
  padding: 4rem 1.6rem;

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    color: ${theme.colors.gray[100]};
    background-color: ${theme.colors.gray[700]};
  `}
`;

export const CounterSeparator = styled.div`
  border-radius: 8px;
  padding: 4rem 0;

  font-size: 160px;
  font-weight: 700;
  line-height: 0px;

  display: flex;
  align-items: center;

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    color: ${theme.colors.green[500]};
  `}
`;
