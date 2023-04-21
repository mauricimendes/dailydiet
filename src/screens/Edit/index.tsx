import { useCallback, useMemo, useRef, useState } from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  BackButtonIcon,
  Body,
  Form,
  FormRow
} from '../Create/styles'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { dateMask, hourMask } from '@components/Input/masks'
import { Select } from '@components/Select'
import { AppError } from '@utils/AppError'
import { SelectType } from '@components/Select/styltes'
import { mealGetById } from '@storage/meals/mealGetById'
import { mealEdit } from '@storage/meals/mealEdit'

type RouteParams = {
  mealId: string
}

export function Edit() {
  const navigation = useNavigation()
  const route = useRoute()
  const { mealId } = route.params as RouteParams

  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [selected, setSelected] = useState<SelectType>('' as SelectType)

  const nameInputRef = useRef<TextInput>(null)
  const descriptionInputRef = useRef<TextInput>(null)
  const dateInputRef = useRef<TextInput>(null)
  const hourInputRef = useRef<TextInput>(null)

  async function fetchMeal() {
    try {
      setIsLoading(true)
      const meal = await mealGetById(mealId)
      setName(meal.name)
      setDescription(meal.description)
      setDate(meal.date)
      setHour(meal.hour)
      setSelected(meal.type)
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
  const handleSelectedTypeMeal = useCallback((value: SelectType) => {
    if (value === selected) {
      setSelected('' as SelectType)
      return
    }
    setSelected(value)
  }, [selected])

  const renderDateMask = useMemo(() => {
    return dateMask(date)
  }, [date])

  const renderHourMask = useMemo(() => {
    return hourMask(hour)
  }, [hour])

  async function handleEdit() {
    try {
      const dayFormatted = renderDateMask.replaceAll('/', '.')

      if (!name || !date || !hour || !description || !selected) {
        throw new AppError('Preencha todos os campos!')
      }

      await mealEdit({
        date: dayFormatted,
        hour: renderHourMask,
        name,
        description,
        type: selected
      }, mealId)

      navigation.navigate('feedback', { type: selected })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message)
      } else {
        Alert.alert('Nova refeição', 'Não foi possível criar a refeiçao.')
        console.log(error)
      }
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeal()
  }, []))

  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => navigation.navigate('details', { mealId: `${date}-${hour}` })}
          activeOpacity={0.8}
        >
          <BackButtonIcon />
        </BackButton>

        <HeaderTitle>
          Nova refeição
        </HeaderTitle>
        <View></View>
      </Header>

      <Body>
        {isLoading ? <Text style={{ width: '100%', textAlign: 'center' }}>Carregando...</Text> : <><Form>
          <Input
            inputRef={nameInputRef}
            label='Nome'
            onChangeText={setName}
            value={name}
            onSubmitEditing={() => descriptionInputRef.current?.focus()}
          />
          <Input
            inputRef={descriptionInputRef}
            label='Descrição'
            numberOfLines={6}
            multiline
            textAlignVertical='top'
            onChangeText={setDescription}
            value={description}
            onSubmitEditing={() => dateInputRef.current?.focus()}
          />

          <FormRow>
            <Input
              inputRef={dateInputRef}
              styleContainer={{ flex: 1 }}
              label='Data'
              onChangeText={setDate}
              value={renderDateMask}
              maxLength={10}
              keyboardType='numeric'
              onSubmitEditing={() => hourInputRef.current?.focus()}
            />
            <Input
              inputRef={hourInputRef}
              styleContainer={{ flex: 1 }}
              label='Hora'
              onChangeText={setHour}
              value={renderHourMask}
              maxLength={5}
              keyboardType='numeric'
            />
          </FormRow>

          <FormRow>
            <Select
              title='Sim'
              selected={selected === 'above'}
              type='above'
              style={{ flex: 1 }}
              activeOpacity={0.8}
              onPress={() => handleSelectedTypeMeal('above')}
            />

            <Select
              title='Não'
              selected={selected === 'bellow'}
              type='bellow'
              style={{ flex: 1 }}
              activeOpacity={0.8}
              onPress={() => handleSelectedTypeMeal('bellow')}
            />
          </FormRow>
        </Form>

          <Button
            title='Salvar alterações'
            onPress={handleEdit}
          /></>}
      </Body>
    </Container>
  )
}