import styled, { css } from 'styled-components/native'

export type TypeDiet = 'above' | 'bellow'

type Props = {
  type: TypeDiet
}

export const Container = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px 16px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 8px;
`

export const MealInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 12px;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM_SMALL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.EXTRA_SMALL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const DotTypeMeal = styled.View<Props>`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: ${({ theme, type }) => type === 'above' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`

export const Title = styled.Text`
  margin-top: 32px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`