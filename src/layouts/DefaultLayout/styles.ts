import styled, { css } from "styled-components";

export const Container = styled.div`
  --padding: 1.6rem;
  --margin: 8rem;

  max-width: calc(112rem + var(--padding) * 2);
  padding-inline: var(--padding);
  margin: var(--margin) auto;
`;

export const Wrapper = styled.div`
  height: calc(100vh - var(--margin) * 2);
  border-radius: 8px;
  padding: 4rem;

  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[800]};
  `}
`;
