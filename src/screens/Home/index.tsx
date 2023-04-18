import { SectionList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import logoPng from '@assets/logo.png'
import avatar from '@assets/avatar.jpeg'

import {
  Container,
  Header,
  Logo,
  Avatar,
  AvatarContent,
  MealsTitle,
  Content,
  List
} from './styles'

import { Percent } from '@components/Percent'
import { Button } from '@components/Button'
import { Meal, MealTitle } from '@components/Meal'
import { TypeDiet } from '@components/Meal/styles'

type Meal = {
  id: string
  name: string
  hour: string
  type: TypeDiet
}

type Meals = {
  title: string
  data: Meal[]
}

const DATA: Meals[] = [
  {
    title: '15.04.23',
    data: [
      {
        id: '1',
        name: 'café',
        hour: '09:00',
        type: 'allow'
      },
      {
        id: '2',
        name: 'almoço',
        hour: '09:00',
        type: 'bellow'
      }, {
        id: '3',
        name: 'janta',
        hour: '09:00',
        type: 'bellow'
      },
    ],
  },
  {
    title: '15.04.23',
    data: [
      {
        id: '4',
        name: 'café',
        hour: '09:00',
        type: 'allow'
      },
      {
        id: '5',
        name: 'almoço',
        hour: '09:00',
        type: 'bellow'
      }, {
        id: '6',
        name: 'almoço',
        hour: '09:00',
        type: 'bellow'
      }, {
        id: '7',
        name: 'almoço',
        hour: '09:00',
        type: 'bellow'
      }, {
        id: '8',
        name: 'almoço',
        hour: '09:00',
        type: 'bellow'
      }, {
        id: '9',
        name: 'almoço',
        hour: '09:00',
        type: 'bellow'
      }
    ],
  }
]

export function Home() {
  const navigation = useNavigation()

  return (
    <Container>
      <Content
        showsVerticalScrollIndicator={false}
      >

        <Header>
          <Logo source={logoPng} />

          <Avatar>
            <AvatarContent
              source={avatar}
            />
          </Avatar>
        </Header>

        <Percent
          activeOpacity={0.8}
          title='90,00%'
          subtitle='das refeições dentro da dieta'
          onPress={() => navigation.navigate('statistic')}
        />

        <MealsTitle>
          Refeições
        </MealsTitle>

        <Button
          activeOpacity={0.8}
          title='Nova refeição'
          icon='add'
        />
        <List>
          <SectionList
            sections={DATA}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Meal
                activeOpacity={0.8}
                name={item.name}
                hour={item.hour}
                type={item.type}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <MealTitle title={title} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </List>
      </Content>
    </Container>
  )
}