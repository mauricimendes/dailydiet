import { Alert, SectionList, Text, View } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

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
  List,
  ListEmpty,
  Loading
} from './styles'

import { Percent } from '@components/Percent'
import { Button } from '@components/Button'
import { Meal, MealTitle } from '@components/Meal'
import { TypeDiet } from '@components/Meal/styles'
import { mealGetAll } from '@storage/meals/mealGetAll'
import { useCallback, useMemo, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

type Meal = {
  id: string
  name: string
  hour: string
  date: string
  type: TypeDiet
}

type Meals = {
  title: string
  data: Meal[]
}

export function Home() {
  const navigation = useNavigation()

  const [isLoading, setIsLoading] = useState(true)
  const [meals, setMeals] = useState<Meals[]>([])

  async function fetchMeals() {
    try {
      setIsLoading(true)
      const meals = await mealGetAll()
      const data: Meals[] = []

      const allDays = meals.map(meal => meal.date)
      const days = [...new Set(allDays)]

      days.map(day => data.push({
        title: day,
        data: []
      }))

      data.map(d => meals.map(meal => {
        if (meal.date === d.title) {
          d.data.push(meal as Meal)
        }
      }))

      setMeals(data)

    } catch (error) {
      console.log(error)
      Alert.alert('Refeições', 'Não foi possível carregas as refeições')
    } finally {
      setIsLoading(false)
    }
  }

  const percentage = useMemo(() => {
    const onlyMeals: Meal[] = []
    var numberMealsAbove = 0

    meals.map(meal => meal.data.map(d => onlyMeals.push(d)))
    numberMealsAbove = onlyMeals.filter(meal => meal.type === 'above').length

    if (meals.length === 0) return 0

    return Number(((100 * numberMealsAbove) / onlyMeals.length).toFixed(2))
  }, [meals])

  useFocusEffect(useCallback(() => {
    fetchMeals()
  }, []))

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

        {percentage !== 0 && <Percent
          activeOpacity={0.8}
          title={`${percentage}%`}
          subtitle='das refeições dentro da dieta'
          dietType={percentage >= 50 ? 'above' : 'bellow'}
          onPress={() => navigation.navigate('statistic', { percentage: percentage })}
        />}

        <MealsTitle>
          Refeições
        </MealsTitle>

        <Button
          title='Nova refeição'
          icon='add'
          onPress={() => navigation.navigate('create')}
        />
        <List>
          {isLoading ?
            <Loading style={{ flex: 1 }}>
              <ListEmpty>
                Carregando...
              </ListEmpty>
            </Loading>
            : <SectionList
              sections={meals}
              keyExtractor={item => item.id}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <Meal
                  activeOpacity={0.8}
                  name={item.name}
                  hour={item.hour}
                  type={item.type}
                  onPress={() => navigation.navigate('details', { mealId: `${item.date}-${item.hour}` })}
                />
              )}
              renderSectionHeader={({ section: { title } }) => (
                <MealTitle title={title} />
              )}
              contentContainerStyle={meals.length === 0 && { marginTop: 124, alignItems: 'center' }}
              ListEmptyComponent={() => (
                <ListEmpty>
                  Cadastre suas refeições!
                </ListEmpty>
              )}
              showsVerticalScrollIndicator={false}
            />}
        </List>
      </Content>
      <LinearGradient
        colors={['transparent', '#FAFAFA']}
        style={{ position: 'absolute', bottom: 0, width: '100%', height: 160 }}
      />
    </Container>
  )
}