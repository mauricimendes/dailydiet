import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLLECTION } from '@storage/storageConfig'

export async function mealDelteSequence() {
  try {
    await AsyncStorage.setItem(`${MEALS_COLLECTION}-best_sequence`, JSON.stringify(0))
  } catch (error) {
    throw error
  }
} 