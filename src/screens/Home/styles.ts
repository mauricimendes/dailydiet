import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Content = styled.ScrollView`
  flex: 1;
  padding: 24px 24px 24px 24px;
`

export const List = styled.View`
  padding-bottom: 24px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
`

export const Logo = styled.Image`
  width: 82px;
`

export const Avatar = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`

export const AvatarContent = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`

export const MealsTitle = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM_SMALL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const ListEmpty = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM_SMALL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Loading = styled.View`
  flex: 1;
  margin-top: 124px;
  align-items: center;
`