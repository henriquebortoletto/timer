import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  max-width: 93rem;
  flex: 1;
  padding: 5rem 0 2.8rem;
  margin-inline: auto;
`;

export const Title = styled.h1`
  font-weight: 700;
  line-height: 160%;
  margin-bottom: 3.2rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray[100]};
  `}
`;

export const TableWrapper = styled.div`
  overflow: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 60rem;
  border-collapse: collapse;
`;

export const TableTh = styled.th`
  font-weight: 700;
  text-align: left;
  line-height: 160%;
  padding: 1.6rem 2.4rem;

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
  }

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray[100]};
    background-color: ${theme.colors.gray[600]};
  `}
`;

export const TableCell = styled.td`
  font-weight: 400;
  line-height: 160%;
  padding: 1.6rem 2.4rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray[300]};
    background-color: ${theme.colors.gray[700]};
    border-top: 4px solid ${theme.colors.gray[800]};
  `}

  &:first-child {
    width: 45%;
  }
`;

export const TableCellEmpty = styled.td`
  height: 40.8rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[700]};
  `}
`;

const STATUS_COLORS = {
  green: "green",
  red: "red",
  yellow: "yellow",
} as const;

interface StatusProps {
  color: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: ${({ theme, color }) =>
      theme.colors[STATUS_COLORS[color]][500]};
  }
`;
