import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  width: fit-content;
  margin-inline: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  width: 100%;
  margin-bottom: 6rem;

  > *:first-child {
    flex: 1;
  }
`;

export const BaseCountDownButton = styled.button`
  font-weight: 700;
  line-height: 2.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  border: none;
  border-radius: 8px;
  padding: 1.6rem 4rem;

  width: 100%;
  cursor: pointer;

  transition: background-color 0.3s;

  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
  `}

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountDownButton = styled(BaseCountDownButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.green[500]};

    &:not(:disabled):hover {
      background-color: ${theme.colors.green[700]};
    }
  `}
`;

export const StopCountDownButton = styled(BaseCountDownButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.red[500]};

    &:not(:disabled):hover {
      background-color: ${theme.colors.red[700]};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${theme.colors.white},
        0 0 0 5px ${theme.colors.red[500]};
    }
  `}
`;
