import { TouchableOpacityProps } from 'react-native'
import { Container, Dot, SelectType, Title } from './styltes'

type Props = TouchableOpacityProps & {
  selected: boolean
  type: SelectType
  title: string
}

export function Select({ selected, type, title, ...rest }: Props) {
  return (
    <Container
      {...rest}
      selected={selected}
      type={type}
    >
      <Dot
        selected={selected}
        type={type}
      />
      <Title>
        {title}
      </Title>
    </Container>
  )
}