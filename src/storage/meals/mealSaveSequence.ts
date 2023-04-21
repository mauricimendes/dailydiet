import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLLECTION } from '@storage/storageConfig'
import { mealGetBestSequence } from './mealGetBestSequence'

export async function mealSaveSequence() {
  try {
    const bestSequence = await mealGetBestSequence()
    await AsyncStorage.setItem(`${MEALS_COLLECTION}-best_sequence`, JSON.stringify(Number(bestSequence) + 1))
  } catch (error) {
    throw error
  }
} 