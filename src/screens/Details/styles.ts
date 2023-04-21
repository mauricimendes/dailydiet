import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

type LabelProps = {
  type: 'big' | 'small'
}

export type DietType = 'above' | 'bellow'

type Props = {
  type: DietType
}

type ModalProps = {
  deleted?: boolean
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'above' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Header = styled.View`
  width: 100%;
  height: 104px;

  background-color: transparent;
  
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
  align-items: flex-start;

  padding: 24px 28px;
  flex: 1;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Infos = styled.View``

export const Label = styled.Text<LabelProps>`
  ${({ theme, type }) => css`
    font-size: ${type === 'big' ? theme.FONT_SIZE.LARGE : theme.FONT_SIZE.SMALL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM_SMALL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-top: 8px;
`

export const DietInfo = styled.View`
  margin-top: 24px;
  max-width: 148px;
  padding: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 50px;
  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const DietInfoDot = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  background-color: ${({ theme, type }) => type === 'above' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK} ;
`

export const DietInfoTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SMALL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Actions = styled.View`
  width: 100%;
  gap: 10px;
`

export const Modal = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00000025;
  
  justify-content: center;
  align-items: center;
  padding: 24px;
`

export const ModalContent = styled.View`
  width: 100%;
  height: 192px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  padding: 24px;
`

export const ModalTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-bottom: 32px;
  text-align: center;
`

export const ModalActions = styled.View`
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
