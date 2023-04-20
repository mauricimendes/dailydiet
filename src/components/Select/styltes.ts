import styled, { css } from 'styled-components/native'

export type SelectType = 'above' | 'bellow'

type Props = {
  type: SelectType
  selected?: boolean
}

export const Container = styled.TouchableOpacity<Props>`
  height: 50px;
  ${({ theme, type, selected }) => css`
    background-color: ${type === 'above' && selected ? theme.COLORS.GREEN_LIGHT :
      type === 'bellow' && selected ? theme.COLORS.RED_LIGHT :
        theme.COLORS.GRAY_600
    };
    border: 1px solid ${type === 'above' && selected ? theme.COLORS.GREEN_DARK :
      type === 'bellow' && selected ? theme.COLORS.RED_DARK :
        theme.COLORS.GRAY_600};
  `}
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Dot = styled.View<Props>`
  height: 8px;
  width: 8px;
  border-radius: 4px;

  background-color: ${({ theme, type }) => type === 'above' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SMALL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`
