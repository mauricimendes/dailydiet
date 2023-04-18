import { TouchableOpacityProps } from 'react-native'
import { Container, MealInfo, Name, Hour, DotTypeMeal, TypeDiet, Title } from './styles'

type Props = TouchableOpacityProps & {
  name: string
  hour: string
  type: TypeDiet
}

export function Meal({ name, hour, type, ...rest }: Props) {
  return (
    <Container {...rest}>
      <MealInfo>
        <Hour>
          {hour}
        </Hour>
        <Name>
          {name}
        </Name>
      </MealInfo>
      <DotTypeMeal type={type} />
    </Container>
  )
}

export function MealTitle({ title = '' }) {
  return (
    <Title>
      {title}
    </Title>
  )
}