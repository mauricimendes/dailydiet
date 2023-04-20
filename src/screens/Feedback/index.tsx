import { Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import positiveFeedbackImage from '@assets/positiveFeedback.png'
import negativeFeedbackImage from '@assets/negativeFeedback.png'

import {
  Container,
  FeedbackType,
  Title,
  Subtitle,
  Bold,
  Avatar
} from './styles'
import { Button } from '@components/Button'

type RouteParams = {
  type: FeedbackType
}

export function Feedback() {
  const navigation = useNavigation()

  const route = useRoute()
  const { type } = route.params as RouteParams

  return (
    <Container>

      <Title type={type}>
        {type === 'above' ? 'Continue assim!' : 'Que pena!'}
      </Title>

      <Text style={{ flexDirection: 'row', textAlign: 'center' }}>
        <Subtitle>
          {type === 'above' ? 'Você continua ' : 'Você '}
        </Subtitle>

        <Bold>
          {type === 'above' ? 'dentro da dieta. ' : 'saiu da dieta '}
        </Bold>

        <Subtitle>
          {type === 'above' ? 'Muito bem!' : 'dessa vez, mas continue se esforçando e não desista!'}
        </Subtitle>
      </Text>

      <Avatar source={type === 'above' ? positiveFeedbackImage : negativeFeedbackImage} />

      <Button
        title='Ir para página inicial'
        style={{ maxWidth: 192 }}
        onPress={() => navigation.navigate('home')}
      />
    </Container>
  )
}