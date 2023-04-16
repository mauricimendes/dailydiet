import styled from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

export const Container = styled.View`
  width: 100%;
  height: 102px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const Icon = styled(ArrowUpRight)``

export const Title = styled.Text``

export const Subtitle = styled.Text``