import styled, { css } from "styled-components";

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
