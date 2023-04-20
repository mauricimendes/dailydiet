import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Header,
  HeaderBackButton,
  HeaderBackButtonIcon,
  HeaderTitle,
  HeaderSubtitle,
  Body,
  Title,
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoRow
} from './styles'

export function Statistic() {
  const navigation = useNavigation()

  return (
    <Container>
      <Header type='above'>
        <HeaderBackButton
          activeOpacity={0.8}
          onPress={() => navigation.navigate('home')}
        >
          <HeaderBackButtonIcon />
        </HeaderBackButton>
        <HeaderTitle  >
          98,00%
        </HeaderTitle>
        <HeaderSubtitle>
          das refeições dentro da dieta
        </HeaderSubtitle>
      </Header>

      <Body>
        <Title>
          Estatísticas gerais
        </Title>

        <Info>
          <InfoTitle>
            22
          </InfoTitle>
          <InfoSubtitle>
            melhor sequência de pratos dentro da dieta
          </InfoSubtitle>
        </Info>

        <Info>
          <InfoTitle>
            109
          </InfoTitle>
          <InfoSubtitle>
            refeições registradas
          </InfoSubtitle>
        </Info>

        <InfoRow>
          <Info type='above' style={{ flex: 1 }}>
            <InfoTitle>
              99
            </InfoTitle>
            <InfoSubtitle>
              refeições dentro da dieta
            </InfoSubtitle>
          </Info>

          <Info type='bellow' style={{ flex: 1 }}>
            <InfoTitle>
              10
            </InfoTitle>
            <InfoSubtitle>
              refeições fora da dieta
            </InfoSubtitle>
          </Info>
        </InfoRow>
      </Body>
    </Container>
  )
}