import { useCallback, useMemo, useRef, useState } from 'react'
import { TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  BackButtonIcon,
  Body,
  Form,
  FormRow
} from './styles'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { dateMask, hourMask } from '@components/Input/masks'
import { Select } from '@components/Select'

export function Create() {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')

  const nameInputRef = useRef<TextInput>(null)
  const descriptionInputRef = useRef<TextInput>(null)
  const dateInputRef = useRef<TextInput>(null)
  const hourInputRef = useRef<TextInput>(null)

  const [selected, setSelected] = useState('')

  const handleSelectedTypeMeal = useCallback((value: string) => {
    if (value === selected) {
      setSelected('')
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

  function handleCreate() {
    navigation.navigate('feedback', { type: selected })
  }

  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => navigation.navigate('home')}
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
        <Form>
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
              selected={selected === 'positive'}
              type='positive'
              style={{ flex: 1 }}
              activeOpacity={0.8}
              onPress={() => handleSelectedTypeMeal('positive')}
            />

            <Select
              title='Não'
              selected={selected === 'negative'}
              type='negative'
              style={{ flex: 1 }}
              activeOpacity={0.8}
              onPress={() => handleSelectedTypeMeal('negative')}
            />
          </FormRow>
        </Form>

        <Button
          title='Cadastrar refeição'
          onPress={handleCreate}
        />
      </Body>
    </Container>
  )
}