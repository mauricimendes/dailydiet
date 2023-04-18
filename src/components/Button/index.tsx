import { Text, TouchableOpacityProps } from 'react-native'
import {
  Container,
  ButtonTypes,
  Title,
  IconTypes,
  EditIcon,
  TrashIcon,
  AddIcon
} from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type?: ButtonTypes
  icon?: IconTypes
}

export function Button({ title, type = 'solid', icon, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {icon === 'add' ? <AddIcon type={type} /> :
        icon === 'trash' ? <TrashIcon type={type} /> :
          icon === 'edit' ? <EditIcon type={type} /> : null
      }
      <Title type={type}>
        {title}
      </Title>
    </Container>
  )
}