import styled, { css } from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

export type PercentTypeProp = 'above' | 'bellow'

type Props = {
  type: PercentTypeProp
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 102px;
  border-radius: 8px;

  background-color: ${({ theme, type }) =>
    type === 'above'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT
  };
  
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.EXTRA_LARGE}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SMALL}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  color: type === 'above' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24
}))`
  position: absolute;
  top: 12px;
  right: 12px;
`