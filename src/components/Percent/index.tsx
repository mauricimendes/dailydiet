import { useState } from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Icon, PercentTypeProp, Subtitle, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  subtitle: string
  dietType?: PercentTypeProp
}

export function Percent({ title, dietType = 'above', subtitle, ...rest }: Props) {
  return (
    <Container type={dietType} {...rest}>
      <Icon type={dietType} />
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}