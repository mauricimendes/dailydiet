import styled, { css } from 'styled-components/native'

export type FeedbackType = 'above' | 'bellow'

type Props = {
  type: FeedbackType
}

export const Container = styled.View`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.LARGE}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${type === 'above' ? css`${theme.COLORS.GREEN_DARK}` : `${theme.COLORS.RED_DARK}`} ;
  `}

  text-align: center;
  margin-bottom: 8px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM_SMALL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100} ;
  `}

  text-align: center;
`

export const Bold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM_SMALL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100} ;
  `}
`

export const Avatar = styled.Image`
  width: 224px;
  height: 288px;

  margin-top: 40px;
  margin-bottom: 32px;
`