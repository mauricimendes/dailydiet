import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowUpRight } from 'phosphor-react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 24px 24px 0 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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