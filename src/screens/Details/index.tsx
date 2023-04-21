import { useCallback, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

import {
  Container,
  DietType,
  Header,
  BackButton,
  BackButtonIcon,
  HeaderTitle,
  Body,
  Infos,
  Actions,
  Label,
  Description,
  DietInfo,
  DietInfoDot,
  DietInfoTitle,
  Modal,
  ModalContent,
  ModalTitle,
  ModalActions
} from './styles'
import { Button } from '@components/Button'
import { MealStorageDTO } from '@storage/meals/MealStorageDTO'
import { mealGetById } from '@storage/meals/mealGetById'
import { AppError } from '@utils/AppError'
import { mealDelete } from '@storage/meals/mealDelete'

type RouteParams = {
  mealId: string,
}

export function Details() {
  const route = useRoute()
  const navigation = useNavigation()

  const [isLoading, setIsLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const { mealId } = route.params as RouteParams
  const [meal, setMeal] = useState<MealStorageDTO>({} as MealStorageDTO)

  async function getMeal() {
    try {
      setIsLoading(true)
      const mealS = await mealGetById(mealId)
      setMeal(mealS)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Refeições', error.message)
      } else {
        console.log(error)
        Alert.alert('Refeições', 'Não foi possível concluir.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  async function handleDeleteMeal(id: string) {
    try {
      await mealDelete(id)
      navigation.navigate('home')
    } catch (error) {
      console.log(error)
      Alert.alert('Refeições', 'Não foi possível deletar a refeição.')
    }
  }

  useFocusEffect(useCallback(() => {
    getMeal()
  }, []))

  return (
    <Container type={meal.type}>
      <Header>
        <BackButton
          onPress={() => navigation.navigate('home')}
          activeOpacity={0.8}
        >
          <BackButtonIcon />
        </BackButton>

        <HeaderTitle>
          Refeição
        </HeaderTitle>
        <View></View>
      </Header>

      <Body>
        {isLoading ? <Text style={{ width: '100%', textAlign: 'center' }}>Carregando...</Text> : <><Infos>
          <Label type='big'>
            {meal.name}
          </Label>

          <Description>
            {meal.description}
          </Description>

          <Label type='small' style={{ marginTop: 24 }}>
            Data e hora
          </Label>

          <Description>
            {`${meal.date} às ${meal.hour}`}
          </Description>

          <DietInfo>
            <DietInfoDot type={meal.type} />
            <DietInfoTitle>
              {meal.type === 'above' ? 'Dentro da dieta' : 'Fora da dieta'}
            </DietInfoTitle>
          </DietInfo>
        </Infos>

          <Actions>
            <Button
              icon='edit'
              title='Editar refeição'
              onPress={() => navigation.navigate('edit', { mealId: `${meal.date}-${meal.hour}` })}
            />
            <Button
              icon='trash'
              title='Excluir refeição'
              type='outline'
              onPress={() => setOpenModal(true)}
            />
          </Actions></>}
      </Body>

      {openModal &&
        <Modal>
          <ModalContent>
            <ModalTitle>
              Deseja realmente excluir o registro da refeição?
            </ModalTitle>
            <ModalActions>
              <Button
                title='Cancelar'
                style={{ flex: 1 }}
                type='outline'
                onPress={() => setOpenModal(false)}
              />

              <Button
                title='Sim, excluir'
                style={{ flex: 1 }}
                onPress={() => handleDeleteMeal(`${meal.date}-${meal.hour}`)}
              />
            </ModalActions>
          </ModalContent>
        </Modal>
      }
    </Container>
  )
}