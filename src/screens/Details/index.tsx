import { useState } from 'react'
import { View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

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

type RouteParams = {
  meal_id: string
}

export function Details() {
  const route = useRoute()
  const { meal_id } = route.params as RouteParams

  const navigation = useNavigation()

  const [dietType, setDietType] = useState<DietType>('positive')
  const [openModal, setOpenModal] = useState(false)

  return (
    <Container type={dietType}>
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
        <Infos>
          <Label type='big'>
            Sanduíche
          </Label>

          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Description>

          <Label type='small' style={{ marginTop: 24 }}>
            Data e hora
          </Label>

          <Description>
            12/08/2022 às 16:00
          </Description>

          <DietInfo>
            <DietInfoDot type={dietType} />
            <DietInfoTitle>
              {dietType === 'positive' ? 'Dentro da dieta' : 'Fora da dieta'}
            </DietInfoTitle>
          </DietInfo>
        </Infos>

        <Actions>
          <Button
            icon='edit'
            title='Editar refeição'
            onPress={() => navigation.navigate('create')}
          />
          <Button
            icon='trash'
            title='Excluir refeição'
            type='outline'
            onPress={() => setOpenModal(true)}
          />
        </Actions>
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
                onPress={() => navigation.navigate('home')}
              />
            </ModalActions>
          </ModalContent>
        </Modal>
      }
    </Container>
  )
}