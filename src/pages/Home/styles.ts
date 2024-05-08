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

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    font-weight: 700;
    line-height: 160%;

    ${({ theme }) => css`
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray[100]};
    `}
  }
`;

export const Label = styled.label`
  font-weight: 700;
  line-height: 160%;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray[100]};
  `}
`;

const BaseInput = styled.input`
  font-weight: 700;
  line-height: 100%;

  background: transparent;
  border: 0;

  padding: 1.2rem 0.8rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.gray[100]};
    border-bottom: 2px solid ${theme.colors.gray[500]};

    &::placeholder {
      color: ${theme.colors.gray[500]};
    }

    &:focus {
      box-shadow: none;
      border-bottom-color: ${theme.colors.green[300]};
    }
  `}
`;

export const InputTask = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const InputMinutes = styled(BaseInput)`
  text-align: center;
  width: 7.2rem;
`;

export const CountDown = styled.div`
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

export const Button = styled.button`
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
    background-color: ${theme.colors.green[500]};

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${theme.colors.green[700]};
    }
  `}
`;
