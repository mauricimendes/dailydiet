import styled, { css } from 'styled-components/native'

type Props = {
  focus?: boolean
}

export const Container = styled.View`
  gap: 4px;
  margin-bottom: 12px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SMALL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const TextInput = styled.TextInput<Props>`
  border: 1px solid ${({ theme, focus }) => focus ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
  border-radius: 6px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM_SMALL}px;

  padding: 8px 14px;
  justify-content: flex-start;
  align-items: flex-start;
`