import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Header = styled.View`
  width: 100%;
  height: 132px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding-top: 52px;
  padding-left: 24px;
`

export const HeaderTitle = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}

  text-align: center;
  margin-left: -48px;
`

export const Body = styled.View`
  justify-content: space-between;
  align-items: center;

  padding: 24px 28px;
  flex: 1;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Form = styled.View`
  width: 100%;
`

export const FormRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

export const BackButton = styled.TouchableOpacity``

export const BackButtonIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24
}))``