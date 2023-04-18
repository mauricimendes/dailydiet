import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

export type DietType = 'allow' | 'bellow'

type Props = {
  type?: DietType
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Header = styled.View<Props>`
  height: 200px;
  width: 100%;

  background-color: ${({ theme, type }) => type === 'allow' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.EXTRA_LARGE}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const HeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SMALL}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const Body = styled.View`
  margin-top: -32px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  align-items: center;

  padding-left: 24px;
  padding-right: 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SMALL}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-top: 32px;
  margin-bottom: 24px;
`

export const Info = styled.View<Props>`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;

  border-radius: 8px;
  gap: 8px;
  
  margin-bottom: 16px;

  ${({ theme, type }) =>
    type === 'allow' ?
      css`
        background-color: ${theme.COLORS.GREEN_LIGHT};
    ` : type === 'bellow' ?
        css`
        background-color: ${theme.COLORS.RED_LIGHT};
      ` :
        css`
          background-color: ${theme.COLORS.GRAY_600};
        `
  };
`

export const InfoTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LARGE}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const InfoSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SMALL}px;
    color: ${theme.COLORS.GRAY_200};
  `}

  text-align: center;
`

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  gap: 12px;
`

export const HeaderBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;

  justify-content: center;
  align-items: center;
`

export const HeaderBackButtonIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))``
