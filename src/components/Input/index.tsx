import { useState } from 'react'
import { TextInput as TextInputRef, TextInputProps } from 'react-native'
import {
  Container,
  Label,
  TextInput
} from './styles'

type Props = TextInputProps & {
  label: string
  styleContainer?: Object
  inputRef?: React.RefObject<TextInputRef>
}

export function Input({ inputRef, label, styleContainer, ...rest }: Props) {

  const [focus, setFocus] = useState(false)

  return (
    <Container style={styleContainer}>
      <Label>
        {label}
      </Label>
      <TextInput
        {...rest}
        ref={inputRef}
        focus={focus}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </Container>
  )
}