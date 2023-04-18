import styled, { css } from 'styled-components/native'
import { PencilSimpleLine, Trash, Plus } from 'phosphor-react-native'

export type ButtonTypes = 'solid' | 'outline'
export type IconTypes = 'add' | 'edit' | 'trash'

type Props = {
  type: ButtonTypes
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 50px;
  
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  ${({ theme, type }) => css`
    background-color: ${type === 'solid' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
    border: ${type === 'solid' ? 0 : `1px solid ${theme.COLORS.GRAY_100}`};
  `}
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SMALL}px;
      color: ${type === 'solid' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  `}
`

export const TrashIcon = styled(Trash).attrs<Props>(({ theme, type }) => ({
  color: type === 'solid' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
  size: 16
}))``

export const EditIcon = styled(PencilSimpleLine).attrs<Props>(({ theme, type }) => ({
  color: type === 'solid' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
  size: 16
}))``

export const AddIcon = styled(Plus).attrs<Props>(({ theme, type }) => ({
  color: type === 'solid' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
  size: 16
}))``