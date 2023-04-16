import logoPng from '@assets/logo.png'
import avatar from '@assets/avatar.jpeg'

import {
  Container,
  Header,
  Logo,
  Avatar,
  AvatarContent
} from './styles'
import { Percent } from '@components/Percent'

export function Home() {
  return (
    <Container>

      <Header>
        <Logo source={logoPng} />

        <Avatar>
          <AvatarContent
            source={avatar}
          />
        </Avatar>
      </Header>

      <Percent
        title='90,00%'
        subtitle='das refeições dentro da dieta'
      />
    </Container>
  )
}