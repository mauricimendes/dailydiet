import { useCallback, useMemo, useState } from 'react'
import { Alert, Text } from 'react-native'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

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
import { mealGetBestSequence } from '@storage/meals/mealGetBestSequence'
import { TypeDiet } from '@components/Meal/styles'
import { mealGetAll } from '@storage/meals/mealGetAll'
import { MealStorageDTO } from '@storage/meals/MealStorageDTO'

type RouteParams = {
  percentage: number
}


export function Statistic() {
  const [isLoading, setIsLoading] = useState(true)
  const [bestSequence, setBestSequence] = useState('')
  const [meals, setMeals] = useState<MealStorageDTO[]>([])

  const navigation = useNavigation()
  const route = useRoute()
  const { percentage } = route.params as RouteParams

  async function fetchBestSequence() {
    try {
      setIsLoading(true)
      const best = await mealGetBestSequence()
      setBestSequence(best!)
    } catch (error) {
      Alert.alert('Melhor sequência', 'Não foi possível carregar a melhor sequência.')
    } finally {
      setIsLoading(false)
    }
  }

  async function fetchMeals() {
    try {
      setIsLoading(true)
      const allMeals = await mealGetAll()
      setMeals(allMeals)
    } catch (error) {
      Alert.alert('Refeições', 'Não foi possível carregar as informações de refeições.')
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchBestSequence()
    fetchMeals()
  }, []))

  const allMeals = useMemo(() => {
    return meals.length
  }, [meals])

  const allMealsAboveDiet = useMemo(() => {
    return meals.filter(meal => meal.type === 'above').length
  }, [meals])

  const allMealsBellowDiet = useMemo(() => {
    return meals.filter(meal => meal.type === 'bellow').length
  }, [meals])

  return (
    <Container>
      <Header type={percentage >= 50 ? 'above' : 'bellow'}>
        <HeaderBackButton
          activeOpacity={0.8}
          onPress={() => navigation.navigate('home')}
        >
          <HeaderBackButtonIcon />
        </HeaderBackButton>
        <HeaderTitle  >
          {`${percentage}%`}
        </HeaderTitle>
        <HeaderSubtitle>
          das refeições dentro da dieta
        </HeaderSubtitle>
      </Header>

      <Body>
        <Title>
          Estatísticas gerais
        </Title>

        {isLoading ? <Text>Carregando...</Text> : <><Info>
          <InfoTitle>
            {bestSequence}
          </InfoTitle>
          <InfoSubtitle>
            melhor sequência de pratos dentro da dieta
          </InfoSubtitle>
        </Info>

          <Info>
            <InfoTitle>
              {allMeals}
            </InfoTitle>
            <InfoSubtitle>
              refeições registradas
            </InfoSubtitle>
          </Info>

          <InfoRow>
            <Info type='above' style={{ flex: 1 }}>
              <InfoTitle>
                {allMealsAboveDiet}
              </InfoTitle>
              <InfoSubtitle>
                refeições dentro da dieta
              </InfoSubtitle>
            </Info>

            <Info type='bellow' style={{ flex: 1 }}>
              <InfoTitle>
                {allMealsBellowDiet}
              </InfoTitle>
              <InfoSubtitle>
                refeições fora da dieta
              </InfoSubtitle>
            </Info>
          </InfoRow></>}
      </Body>
    </Container>
  )
}