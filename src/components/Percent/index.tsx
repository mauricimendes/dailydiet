import { Container, Icon, Subtitle, Title } from './styles'

type Props = {
  title: string
  subtitle: string
}

export function Percent({ title, subtitle }: Props) {
  return (
    <Container>
      <Icon />
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}